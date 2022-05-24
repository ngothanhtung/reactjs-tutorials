import React from 'react';
import './App.css';

function Header() {
  return (
    <div>
      <h1>This is header</h1>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <hr />
      <address>Aptech Đà Nẵng, 38 Yên Bái</address>
    </footer>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Header></Header>
      <h1>{count}</h1>
      <button
        disabled={count === 1}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Previous
      </button>
      <button
        disabled={count === 4}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Next
      </button>
      <img alt='' src={`/images/${count}.jpeg`} style={{ width: '100%' }} />
      <Footer></Footer>
    </div>
  );
}

export default App;
