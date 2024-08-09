import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DocumentUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentName, setDocumentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile({
          name: file.name,
          type: file.type,
          data: reader.result.split(',')[1], // Extract base64 string
        });
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  

  const handleSubmit = async () => {
    if (!selectedFile || !documentName || !studentId) {
      setError('All fields are required');
      return;
    }
  
    setError('');
    setSuccessMessage('');
    setUploading(true);
  
    try {
      const response = await axios.post('http://localhost:5000/api/upload', {
        documentName,
        studentId,
        fileData: selectedFile.data, // Send base64 string
        mimeType: selectedFile.type, // Include mimeType
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });
  
      // Use response data if needed
      console.log('Upload response:', response.data);
  
      setSuccessMessage('File uploaded successfully');
      setSelectedFile(null);
      setDocumentName('');
      setStudentId('');
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
    } finally {
      setUploading(false);
    }
  };
  
  

  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Upload Document
      </Typography>
      <Box style={styles.formContainer}>
        <TextField
          label="Document Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />
        <TextField
          label="Student ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <input
          type="file"
          id="file-upload"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button variant="contained" color="primary" style={styles.button} component="span">
            Select File
          </Button>
        </label>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleSubmit}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </Button>
        {uploading && <LinearProgress variant="determinate" value={uploadProgress} />}
        {error && <Typography color="error">{error}</Typography>}
        {successMessage && <Typography color="primary">{successMessage}</Typography>}
      </Box>
      <Button
        variant="contained"
        color="secondary"
        style={styles.button}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  formContainer: {
    marginBottom: '20px',
  },
  button: {
    marginRight: '10px',
  },
};

export default DocumentUpload;
