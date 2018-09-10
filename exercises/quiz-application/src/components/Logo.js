import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default () => (
  <div className="logo" key="logo">
    <Link to="/">
      <img src={logo} alt="logo" />
      <h1>Online Education</h1>
    </Link>
  </div>
)