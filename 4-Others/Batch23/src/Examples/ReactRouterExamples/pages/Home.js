import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <Link to='/about'>Route to about</Link>
      <a href='/about'>Link to about</a>
      <button
        onClick={() => {
          // window.location = '/about';
          navigate('/about');
        }}
      >
        Go to about
      </button>
    </div>
  );
}

export default Home;
