import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DocumentDetails = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  const handleVerifyDocuments = ()=>{
    navigate('/details/verifyDocument');
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/document/${studentId}`);
        setDocument(response.data);
      } catch (err) {
        console.error('Error fetching document:', err.response ? err.response.data : err.message);
        setError('Error fetching document details');
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchDocument();
    } else {
      setError('Student ID is missing');
      setLoading(false);
    }
  }, [studentId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!document) return <Typography>No document found</Typography>;

  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Document Details
      </Typography>
      <Box style={styles.documentSection}>
        {document.mimeType.startsWith('image/') && (
          <img
            src={`data:${document.mimeType};base64,${document.fileData}`}
            alt="Document Preview"
            style={styles.preview}
          />
        )}
        <Box style={styles.infoSection}>
          <Typography variant="h6">Document Information</Typography>
          <Typography><strong>Document Name:</strong> {document.originalName}</Typography>
          <Typography><strong>Document ID:</strong> {document.id}</Typography>
          <Typography><strong>Student ID:</strong> {document.studentId}</Typography>
        </Box>
        <Box>
         <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={handleVerifyDocuments}
        >
          verify Document
        </Button>
        
        </Box>
        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  documentSection: {
    marginTop: '20px',
  },
  infoSection: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
  },
  preview: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
};

export default DocumentDetails;
