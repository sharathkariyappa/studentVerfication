import React from 'react';
import { Container, Typography, Box } from '@mui/material';


const DocumentDetails=()=>{
      
  return (
    <Container component="main" maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Document Details
      </Typography>
      <Box style={styles.detailsSection}>
        <Typography paragraph>
          <strong>Student ID:</strong> 
        </Typography>
        <Typography paragraph>
          <strong>Document ID:</strong> 
        </Typography>
      </Box>
    </Container>
  );
};

const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
    },
    detailsSection: {
      marginBottom: '20px',
      textAlign: 'left',
    },
    actionsSection: {
      marginTop: '20px',
    },
    button: {
      marginRight: '10px',
      marginBottom: '10px',
    },
  };

  export default DocumentDetails;