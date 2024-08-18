import React from 'react';
import { Link } from 'react-router-dom';
import ConnectButton from './ConnectButton';
const Header = (props) => {

  const {address, isConnected, connect} = props;

  return (
    <header>
      <div className='leftH'>
        <Link to='/Home' className='link'>
          <div className='headerItem'>Home</div>
        </Link>
        <Link to='/login/LoginPage' className='link'>
          <div className='headerItem'>Login</div>
        </Link>
        <Link to='/register/RegisterPage' className='link'>
          <div className='headerItem'>Register</div>
        </Link>
        <Link to='/pages/CartPage' className='link'>
          <div className='headerItem'>Shopping Cart</div>
        </Link>
        <Link to='/about/AboutUs' className='link'>
          <div className='headerItem'>About Us</div>
        </Link>
      </div>
      <div className='rightH'>
        <div>
          <button className='connectButton'><ConnectButton/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
