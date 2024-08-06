import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 

const StudentLogin = () => {

  // const handleLogin =()=>{
  //   const navigate = useNavigate(); 
  //   navigate('/profile/StudentProfile'); 
  // };
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
          type="Wallet Address"
        />
        
        <Button
          // onClick={handleLogin}
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
