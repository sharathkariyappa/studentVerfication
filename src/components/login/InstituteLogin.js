import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const InstituteLogin = () => {
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
          label="Institute Name"
          autoComplete="Institute Name"
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
          label="Institute  Wallet Address"
          type="Institute Wallet Address"
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

export default InstituteLogin;
