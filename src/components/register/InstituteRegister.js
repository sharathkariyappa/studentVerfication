import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InstituteRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [instituteId, setInstituteId] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [emailId, setEmailId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInstituteRegister = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/institute/register', {
        name,
        instituteId: parseInt(instituteId, 10), 
        walletAddress,
        emailId,
      });
      console.log('Institute registered:', response.data);
      navigate('/login/InstituteLogin');
    } catch (error) {
      console.error('Error registering institute:', error);
      setError('Failed to register institute');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h5" gutterBottom>
        Institute Register
      </Typography>
      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Institute Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Institute ID"
          type="number"
          value={instituteId}
          onChange={(e) => setInstituteId(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email ID"
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleInstituteRegister}
          fullWidth
          style={styles.button}
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default InstituteRegister;
