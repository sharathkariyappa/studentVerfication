import React, { useState } from 'react';
import { Container, Typography, Button, Box, TextField, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InstituteProfile = () => {
  const navigate = useNavigate();
  const [institute, setInstitute] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isFetchingInstitute, setIsFetchingInstitute] = useState(false);
  const [isFetchingStudent, setIsFetchingStudent] = useState(false);

  // Fetch Institute Details
  const fetchInstituteDetails = async () => {
    if (!walletAddress) {
      setError('Wallet address is required');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    setError(null);
    setIsFetchingInstitute(true);

    try {
      const response = await axios.get('http://localhost:5000/api/institute/details', {
        params: { walletAddress },
      });
      setInstitute(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
      setIsFetchingInstitute(false);
    }
  };

  // Fetch Student Details
  const fetchStudentDetails = async () => {
    if (!walletAddress) {
      setError('Wallet address is required');
      setOpenSnackbar(true);
      return;
    }

    setLoading(true);
    setError(null);
    setIsFetchingStudent(true);

    try {
      const response = await axios.get('http://localhost:5000/api/student/details', {
        params: { walletAddress },
      });
      setStudent(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
      setIsFetchingStudent(false);
    }
  };

  // Handle Errors
  const handleError = (error) => {
    if (error.response) {
      setError(`Error: ${error.response.status} - ${error.response.data.error}`);
    } else if (error.request) {
      setError('Error: No response from server');
    } else {
      setError(`Error: ${error.message}`);
    }
    setOpenSnackbar(true);
  };

  const handleViewDocuments = () => {
    if (student) {
      navigate(`/details/viewDocumentDetails/${student.studentId}`);  // Navigate with studentId
    }
  };

  // const handleVerifyDocuments = ()=>{
  //   navigate('/details/verifyDocument');
  // };

  const handleLogout = () => {
    navigate('/home');
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        <TextField
          label="Wallet Address"
          variant="outlined"
          fullWidth
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          style={styles.input}
        />
        <Box style={styles.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={fetchInstituteDetails}
            disabled={loading || isFetchingInstitute}
          >
            {isFetchingInstitute ? 'Fetching Institute Details...' : 'Fetch Institute Details'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={fetchStudentDetails}
            disabled={loading || isFetchingStudent}
          >
            {isFetchingStudent ? 'Fetching Student Details...' : 'Fetch Student Details'}
          </Button>
        </Box>
        {error && (
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert onClose={handleCloseSnackbar} severity="error">
              {error}
            </Alert>
          </Snackbar>
        )}
        {institute && (
          <>
            <Typography paragraph>
              <strong>Name of Institute:</strong> {institute.name}
            </Typography>
            <Typography paragraph>
              <strong>Institute ID:</strong> {institute.instituteId}
            </Typography>
            <Typography paragraph>
              <strong>Wallet Address:</strong> {institute.walletAddress}
            </Typography>
            <Typography paragraph>
              <strong>Email Address:</strong> {institute.emailId}
            </Typography>
          </>
        )}
        {student && (
          <>
            <Typography paragraph>
              <strong>Name:</strong> {student.name}
            </Typography>
            <Typography paragraph>
              <strong>Student ID:</strong> {student.studentId}
            </Typography>
            <Typography paragraph>
              <strong>Institute ID:</strong> {student.instituteId}
            </Typography>
            <Typography paragraph>
              <strong>Wallet Address:</strong> {student.walletAddress}
            </Typography>
            <Typography paragraph>
              <strong>Email Address:</strong> {student.email}
            </Typography>
          </>
        )}
      </Box>
      <Box style={styles.actionsSection}>
        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleViewDocuments}
        >
          View Documents
        </Button>
        {/* <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={handleVerifyDocuments}
        >
          Verify Documents
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
  input: {
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
};

export default InstituteProfile;
