import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    instituteId: '',
    walletAddress: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    try {
      // Convert studentId and instituteId to numbers
      const formattedData = {
        ...formData,
        studentId: Number(formData.studentId),
        instituteId: Number(formData.instituteId),
      };
  
      await axios.post('http://localhost:5000/api/register', formattedData);
      navigate('/login/StudentLogin');
    } catch (error) {
      console.error('Error registering student:', error.response?.data || error.message);
    }
  };
  

  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h5" gutterBottom>
        Student Register
      </Typography>
      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Student Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Student ID"
          name="studentId"
          type="number"
          value={formData.studentId}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Institute ID"
          name="instituteId"
          type="number"
          value={formData.instituteId}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Wallet Address"
          name="walletAddress"
          type="text"
          value={formData.walletAddress}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email ID"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          fullWidth
          style={styles.button}
        >
          Register
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

export default StudentRegister;
