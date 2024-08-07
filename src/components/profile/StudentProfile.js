import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StudentProfile = () => {
  const navigate = useNavigate();
  // const [selectedFile, setSelectedFile] = useState(null);

  const handleViewDocuments = () => {
    navigate('/details/viewDocumentDetails'); 
  };

  const handleLogout = () => {
    
    navigate('/home'); 
  };

  const handleUploadDocuments = () => {
    navigate('/details/uploadDocumentDetails'); 
  };

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = () => {
  //   if (selectedFile) {
      
  //     console.log('File ready for upload:', selectedFile);
      
  //   } else {
  //     console.log('No file selected');
  //   }
  // };

  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Student Profile
      </Typography>
      <Box style={styles.sidebar}>
        <Typography variant="h6">Student Details</Typography>
        <p><strong>Name:</strong> </p>
        <p><strong>Student ID:</strong> </p>
        <p><strong>Institute ID:</strong> </p>
        <p><strong>Wallet Address:</strong> </p>
        <p><strong>Email Address:</strong> </p>
      </Box>
      <Box style={styles.mainContent}>
      <Button variant="contained" color="primary" style={styles.button} onClick={handleUploadDocuments}>
          Upload Documents
        </Button>
        {/* <Button variant="contained" color="primary" style={styles.button} onClick={handleUpload}>
          Confirm Upload
        </Button> */}
        <Button variant="contained" color="primary" style={styles.button} onClick={handleViewDocuments}>
          View Documents
        </Button>
      </Box>
      <Button variant="contained" color="secondary" style={styles.button} onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  sidebar: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  mainContent: {
    marginBottom: '20px',
  },
  button: {
    marginRight: '10px',
  },
};

export default StudentProfile;
