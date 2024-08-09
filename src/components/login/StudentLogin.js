import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { walletAddress });
      if (response.data.valid) {
        navigate('/profile/StudentProfile');
      } else {
        setError('Wallet address not found.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h5" gutterBottom>
        Student Login
      </Typography>
      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          fullWidth
          style={styles.button}
        >
          Login
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
  button: {
    marginTop: '20px',
  },
};

export default StudentLogin;
