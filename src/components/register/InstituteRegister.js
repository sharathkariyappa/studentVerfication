import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InstituteRegister = () => { 
  const navigate = useNavigate();

  const handleInstituteRegister = () => {
    
    navigate('/login/InstituteLogin'); 
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
          type="Institute Name"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Institute ID"
          type="Institute ID"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Wallet Address"
          type="Wallet Address"
        />
         <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email ID"
          type="Email"
        />
        
        <Button
          
          variant="contained"
          color="primary"
          onClick={handleInstituteRegister}
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

export default InstituteRegister;
