import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
  const navigate = useNavigate(); 

  const handleLoginAsStudent = () => {
    navigate('/login/StudentLogin'); 
  };

  const handleLoginAsInstitute = () => {
    navigate('/login/InstituteLogin'); 
  };

  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box style={styles.buttonContainer}>
        <Button 
          variant="outlined"
          color="primary"
          onClick={handleLoginAsStudent}
          style={styles.button}
        >
          Login as Student
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleLoginAsInstitute}
          style={styles.button}
        >
          Login as Institute
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
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    margin: '10px',
  },
};

export default LoginPage;
