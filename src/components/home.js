import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Student Register platform</h1>
      <p>The Student Certification Platform harnesses the power of blockchain to offer a secure, transparent, and tamper-proof solution for issuing and verifying educational and professional certificates. This approach addresses common issues in certification processes, such as fraud, inaccuracy, and the administrative burden of verifying credentials.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
  },
};

export default Home;
