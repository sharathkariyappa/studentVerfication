import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Document Verification Platform</h1>
      <h2 style={styles.subHeading}>
        The Student Certification Platform harnesses the power of blockchain to offer a secure, transparent, and tamper-proof solution for issuing and verifying educational and professional certificates. This approach addresses common issues in certification processes, such as fraud, inaccuracy, and the administrative burden of verifying credentials.
      </h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    paddingBottom: '20px', // Add padding below the h1
    fontSize: '2.5rem',
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  subHeading: {
    paddingTop: '10px', // Add padding above the h2
    fontSize: '1.25rem',
    color: '#7f8c8d',
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '0 15px',
  },
};

export default Home;
