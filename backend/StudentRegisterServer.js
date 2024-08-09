const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { Buffer } = require('buffer');

const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // Increase limit for large files

// Route to register a student
app.post('/api/register', async (req, res) => {
  const { name, studentId, instituteId, walletAddress, email } = req.body;

  try {
    const newStudent = await prisma.student.create({
      data: {
        name,
        studentId,
        instituteId,
        walletAddress,
        email,
      },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error creating student:', error.message);
    res.status(400).json({ error: 'Error creating student' });
  }
});

// Route for login verification
app.post('/api/login', async (req, res) => {
  const { walletAddress } = req.body;

  try {
    const student = await prisma.student.findUnique({
      where: { walletAddress },
    });

    if (student) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.error('Error finding student:', error.message);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Route to fetch student details
app.get('/api/student/details', async (req, res) => {
  const { walletAddress } = req.query;

  if (!walletAddress) {
    return res.status(400).json({ error: 'Wallet address is required' });
  }

  try {
    const student = await prisma.student.findUnique({
      where: { walletAddress },
    });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching student details:', error);
    res.status(500).json({ error: 'An error occurred while fetching student details' });
  }
});

// Route to register an institute
app.post('/api/institute/register', async (req, res) => {
  const { name, instituteId, walletAddress, emailId } = req.body;

  try {
    const newInstitute = await prisma.institute.create({
      data: {
        name,
        instituteId,
        walletAddress,
        emailId,
      },
    });
    res.status(201).json(newInstitute);
  } catch (error) {
    console.error('Failed to register institute:', error.message);
    res.status(500).json({ error: 'Failed to register institute' });
  }
});

// Route for institute login verification
app.post('/api/institute/login', async (req, res) => {
  const { walletAddress } = req.body;

  if (!walletAddress) {
    return res.status(400).json({ error: 'Wallet address is required' });
  }

  try {
    const institute = await prisma.institute.findUnique({
      where: { walletAddress },
    });

    if (institute) {
      res.json({ valid: true });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.error('Error finding institute:', error.message);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Route to fetch institute details
app.get('/api/institute/details', async (req, res) => {
  const { walletAddress } = req.query;

  if (!walletAddress) {
    return res.status(400).json({ error: 'Wallet address is required' });
  }

  try {
    const institute = await prisma.institute.findUnique({
      where: { walletAddress },
    });

    if (institute) {
      res.json(institute);
    } else {
      res.status(404).json({ error: 'Institute not found' });
    }
  } catch (error) {
    console.error('Error fetching institute details:', error);
    res.status(500).json({ error: 'An error occurred while fetching institute details' });
  }
});

// Route to handle document upload
app.post('/api/upload', async (req, res) => {
  const { documentName, studentId, fileData, mimeType } = req.body;

  if (!documentName || !studentId || !fileData || !mimeType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Save the document to the database
    const document = await prisma.document.create({
      data: {
        name: documentName,
        studentId: parseInt(studentId),
        fileData: Buffer.from(fileData, 'base64'), // Convert base64 to binary
        originalName: documentName,
        mimeType: mimeType, // Save mimeType
      },
    });

    res.status(201).json(document);
  } catch (error) {
    console.error('Error uploading document:', error.message);
    res.status(500).json({ error: 'Error uploading document' });
  }
});

// server.js
app.get('/api/document/:studentId', async (req, res) => {
  const { studentId } = req.params;

  try {
    const id = parseInt(studentId, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid student ID' });
    }

    const document = await prisma.document.findFirst({
      where: { studentId: id },
    });

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Convert fileData to Base64 if it's not already
    const fileDataBase64 = Buffer.from(document.fileData, 'binary').toString('base64');

    res.json({
      id: document.id,
      studentId: document.studentId,
      originalName: document.originalName,
      mimeType: document.mimeType,
      fileData: fileDataBase64, // Ensure it's Base64 encoded
    });
  } catch (error) {
    console.error('Error fetching document:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
