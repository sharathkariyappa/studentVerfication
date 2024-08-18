import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useSendTransaction } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { parseEther } from 'ethers';

// Styles for the component
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
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1001,
  },
  modalContent: {
    marginBottom: '20px',
  },
  modalButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  modalButtonCancel: {
    backgroundColor: '#6c757d',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
};

// Product data
const products = [
  {
    id: 1,
    name: 'Student Bag',
    image: '/images/bag.png',
    description: 'A sturdy bag for students.',
    price: '0.01', // Updated to a reasonable amount for testing
  },
  {
    id: 2,
    name: 'Laptop',
    image: '/images/laptop.jpg',
    description: 'A high-performance laptop.',
    price: '0.05', // Updated to a reasonable amount for testing
  },
  {
    id: 3,
    name: 'Tab',
    image: '/images/tab.avif',
    description: 'A versatile tablet for all your needs.',
    price: '0.02', // Updated to a reasonable amount for testing
  },
  {
    id: 4,
    name: 'Keyboard',
    image: '/images/keyboard.webp',
    description: 'A mechanical keyboard with RGB lighting.',
    price: '0.01', // Updated to a reasonable amount for testing
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    image: '/images/mouse.webp',
    description: 'A sleek wireless mouse.',
    price: '0.005', // Updated to a reasonable amount for testing
  },
  {
    id: 6,
    name: 'Notebook',
    image: '/images/notebook.jpg',
    description: 'A high-quality notebook for writing.',
    price: '0.0025', // Updated to a reasonable amount for testing
  },
];

const CartPage = () => {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleConfirmPurchase = async () => {
    if (selectedProduct) {
      try {
        if (!isConnected) {
          await connect(connectors[0]);
        }

        const transaction = {
          to: '0x6D580E353439DF0054c2c71FA7F3cA0d6A1e96f9', // Replace with actual recipient address
          value: parseEther(selectedProduct.price),
        };

        console.log('Sending transaction:', transaction);
        const result = await sendTransaction({ request: transaction });

        if (result) {
          console.log('Transaction sent:', result);
          setTransactionStatus('Transaction sent. Awaiting confirmation...');
        } else {
          console.log('Transaction failed or was rejected by the user.');
          setTransactionStatus('Transaction failed or was rejected.');
        }

        setShowModal(false);
      } catch (error) {
        console.error('Transaction failed', error);
        setTransactionStatus(`Transaction failed: ${error.message}`);
      }
    }
  };

  const handleCancelPurchase = () => {
    setShowModal(false);
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
              onClick={() => handleBuyClick(product)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      <Link
        to="/Home"
        style={styles.backLink}
        onMouseOver={(e) => e.currentTarget.style.textDecoration = styles.backLinkHover.textDecoration}
        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        Back to Home
      </Link>

      {showModal && (
        <>
          <div style={styles.overlay}></div>
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <h2>Confirm Purchase</h2>
              <p>Are you sure you want to buy {selectedProduct.name} for {selectedProduct.price} ETH?</p>
              <button
                style={styles.modalButton}
                onClick={handleConfirmPurchase}
              >
                Confirm
              </button>
              <button
                style={{ ...styles.modalButton, ...styles.modalButtonCancel }}
                onClick={handleCancelPurchase}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}

      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
};

export default CartPage;
