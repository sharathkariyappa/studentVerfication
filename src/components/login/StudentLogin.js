import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const StudentLogin = () => {
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
          label="Student Name"
          type="Student Name"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Student ID"
          type="Student ID"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Wallet Address"
          type="Wallet Address"
        />
        
        <Button
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
