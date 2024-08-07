import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StudentRegister = () => {
  const navigate = useNavigate();
  
  const handleregister = () => {
    
    navigate('/login/StudentLogin'); 
  };
  return (

    
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h5" gutterBottom>
        Student Register
      </Typography>
      <Box>
      <div className='connectButton'>Connect</div>
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
          onClick={handleregister}
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
