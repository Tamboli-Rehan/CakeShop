import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
    <div className="logo">
      <Link to="/">
        <span className="logo--Cake">Cake</span>
        <span className="logo--Hub">Hub</span>
      </Link>
    </div>
    </>
  );
}

export default Logo;