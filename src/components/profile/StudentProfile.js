import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentProfile = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');

  const fetchStudentDetails = async () => {
    if (!walletAddress) {
      setError('Wallet address is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:5000/api/student/details', {
        params: { walletAddress },
      });
      setStudent(response.data);
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.status} - ${error.response.data.error}`);
      } else if (error.request) {
        setError('Error: No response from server');
      } else {
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // const handleViewDocuments = () => {
  //   if (student) {
  //     navigate(`/details/viewDocumentDetails/${student.studentId}`);  // Navigate with studentId
  //   }
  // };

  const handleLogout = () => {
    navigate('/home'); 
  };

  const handleUploadDocuments = () => {
    navigate('/details/uploadDocumentDetails'); 
  };

  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Student Profile
      </Typography>
      <Box style={styles.sidebar}>
        <Typography variant="h6">Student Details</Typography>
        <TextField
          label="Wallet Address"
          variant="outlined"
          fullWidth
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          style={styles.input}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={fetchStudentDetails}
          style={styles.button}
        >
          Fetch Details
        </Button>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {student && (
          <>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Student ID:</strong> {student.studentId}</p>
            <p><strong>Institute ID:</strong> {student.instituteId}</p>
            <p><strong>Wallet Address:</strong> {student.walletAddress}</p>
            <p><strong>Email Address:</strong> {student.email}</p>
          </>
        )}
      </Box>
      <Box style={styles.mainContent}>
        <Button variant="contained" color="primary" style={styles.button} onClick={handleUploadDocuments}>
          Upload Documents
        </Button>
        {/* <Button variant="contained" color="primary" style={styles.button} onClick={handleViewDocuments}>
          View Documents
        </Button> */}
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
  input: {
    marginBottom: '20px',
  },
};

export default StudentProfile;
