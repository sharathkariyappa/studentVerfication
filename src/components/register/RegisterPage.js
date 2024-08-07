import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const RegisterPage = () => {
  const navigate = useNavigate(); 

  const handleLoginAsStudent = () => {
    navigate('/register/StudentRegister'); 
  };

  const handleLoginAsInstitute = () => {
    navigate('/register/InstituteRegister'); 
  };

  return (
    <Container component="main" maxWidth="xs" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Box style={styles.buttonContainer}>
        <Button 
          variant="outlined"
          color="primary"
          onClick={handleLoginAsStudent}
          style={styles.button}
        >
          Register as Student
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleLoginAsInstitute}
          style={styles.button}
        >
          Register as Institute
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

export default RegisterPage;
