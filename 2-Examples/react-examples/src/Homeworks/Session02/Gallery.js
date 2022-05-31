import React from 'react';

function Gallery() {
  const [count, setCount] = React.useState(1);

  setInterval(() => {
    setCount(count + 1);
  }, 3000);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Gallery;
