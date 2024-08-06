import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InstituteProfile = () => {
  const navigate = useNavigate();

//   const handleViewStudentDetails = () => {
//     navigate('/student-details'); // Adjust the path according to your routing setup
//   };

//   const handleViewDocuments = () => {
//     navigate('/documents'); // Adjust the path according to your routing setup
//   };

//   const handleVerifyDocuments = () => {
//     navigate('/verify-documents'); // Adjust the path according to your routing setup
//   };
const handleLogout = () => {

    navigate('/home'); 
  };

  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Institute Profile
      </Typography>
      <Box style={styles.detailsSection}>
        <Typography variant="h6" gutterBottom>
          Institute Details
        </Typography>
        <Typography paragraph>
          <strong>Name of Institute:</strong> 
        </Typography>
        <Typography paragraph>
          <strong>institute ID:</strong> 
        </Typography>
        <Typography paragraph>
          <strong>institute Wallet Address:</strong> 
        </Typography>
        <Typography paragraph>
          <strong>Email Address:</strong> 
        </Typography>
      </Box>
      <Box style={styles.actionsSection}>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
        //   onClick={handleViewStudentDetails}
        >
          View Student Details
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
        //   onClick={handleViewDocuments}
        >
          View Documents
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
        //   onClick={handleVerifyDocuments}
        >
          Verify Documents
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
  detailsSection: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  actionsSection: {
    marginTop: '20px',
  },
  button: {
    marginRight: '10px',
    marginBottom: '10px',
  },
};

export default InstituteProfile;
