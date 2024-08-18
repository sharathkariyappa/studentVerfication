import React, { useState } from 'react';
import { Container, Typography, Button, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const VerifyDocument = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    setIsVerified(true);
    setOpenSnackbar(true);
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box textAlign="center" mt={4}>
        <Typography variant="h4" gutterBottom>
          Document Verification
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleVerify}
          >
            Verify
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBack}
          >
            Back
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Documents verified! For further details, click back.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default VerifyDocument;
