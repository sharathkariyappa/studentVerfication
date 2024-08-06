import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InstituteLogin = () => {
  const navigate = useNavigate();

  const handleLogin = ()=>{
    navigate('/profile/InstituteProfile')
  }
  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h5" gutterBottom>
        Institute Login
      </Typography>
      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Institute  Wallet Address"
          type="Institute Wallet Address"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={styles.button}
          onClick={handleLogin}
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

export default InstituteLogin;
