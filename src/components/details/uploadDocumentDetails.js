import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UploadDocuments = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentName, setDocumentName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Document Name:', documentName);
      console.log('File ready for upload:', selectedFile);
      // Add your upload logic here
    } else {
      console.log('No file selected');
    }
  };

  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Upload Documents
      </Typography>
      <Box style={styles.formContainer}>
        <TextField
          label="Name of Document"
          variant="outlined"
          fullWidth
          margin="normal"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
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
        <Button variant="contained" color="primary" style={styles.button} onClick={handleUpload}>
          Submit
        </Button>
      </Box>
      <Button variant="contained" color="secondary" style={styles.button} onClick={() => navigate(-1)}>
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

export default UploadDocuments;
