import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useSendTransaction } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { parseEther } from 'ethers';

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  productsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    maxWidth: '250px',
    textAlign: 'center',
  },
  productImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  productDescription: {
    fontSize: '0.9em',
    color: '#555',
  },
  productPrice: {
    fontSize: '1.1em',
    color: '#333',
    margin: '10px 0',
  },
  buyButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '5px',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  backLink: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#007bff',
    textDecoration: 'none',
  },
  backLinkHover: {
    textDecoration: 'underline',
  },
  swapContainer: {
    position: 'fixed',
    top: '70px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    gap: '10px',
  },
};

const products = [
  {
    id: 1,
    name: 'Student Bag',
    image: '/images/bag.png',
    description: 'A sturdy bag for students.',
    price: '0.05',
  },
  {
    id: 2,
    name: 'Laptop',
    image: '/images/laptop.jpg',
    description: 'A high-performance laptop.',
    price: '1.0',
  },
  {
    id: 3,
    name: 'Tab',
    image: '/images/tab.avif',
    description: 'A versatile tablet for all your needs.',
    price: '0.03',
  },
  {
    id: 4,
    name: 'Keyboard',
    image: '/images/keyboard.webp',
    description: 'A mechanical keyboard with RGB lighting.',
    price: '0.02',
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    image: '/images/mouse.webp',
    description: 'A sleek wireless mouse.',
    price: '0.01',
  },
  {
    id: 6,
    name: 'Notebook',
    image: '/images/notebook.jpg',
    description: 'A high-quality notebook for writing.',
    price: '0.005',
  },
];

const CartPage = () => {
  const { connect } = useConnect({
    connector: new injected(),
  });
  const { isConnected } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const handleBuy = async (price) => {
    try {
      if (!isConnected) {
        await connect();
      }

      const transaction = {
        to: '0x6D580E353439DF0054c2c71FA7F3cA0d6A1e96f9', // Replace with actual recipient address
        value: parseEther(price), // Converts price to wei
      };

      const result = await sendTransaction({ request: transaction });
      console.log('Transaction sent:', result);
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  const navigate = useNavigate();

  const handleSwap = () => {
    navigate('/buy/cart');
  };

  const handleBuyCrypto = () => {
    window.location.href = 'https://login.coinbase.com/signin';
  };

  return (
    <div style={styles.container}>
      <h1>Shopping Cart</h1>
      <button
        style={styles.buyButton}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.buyButton.backgroundColor}
        onClick={handleSwap}
      >
        Swap
      </button>
      <button
        style={styles.buyButton}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.buyButton.backgroundColor}
        onClick={handleBuyCrypto}
      >
        Buy Crypto
      </button>
      <div style={styles.productsList}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>{product.price} ETH</p>
            <button
              style={styles.buyButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.buyButton.backgroundColor}
              onClick={() => handleBuy(product.price)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      <div style={styles.swapContainer}></div>
      <Link
        to="/Home"
        style={styles.backLink}
        onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.backLinkHover.textDecoration}
        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default CartPage;
