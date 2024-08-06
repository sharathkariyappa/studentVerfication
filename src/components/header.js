import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className='leftH'>
        <Link to='/Home' className='link'>
          <div className='headerItem'>Home</div>
        </Link>
        <Link to='/login/LoginPage' className='link'>
          <div className='headerItem'>login</div>
        </Link>
        <Link to='/register/RegisterPage' className='link'>
          <div className='headerItem'>register</div>
        </Link>
        
      </div>
      <div className='rightH'>
        
        

      </div>
    </header>
  )
}

export default Header