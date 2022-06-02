import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  const timer = React.useRef(null);

  React.useEffect(() => {
    // component mount
    console.log('🔥Component update');
  });

  React.useEffect(() => {
    // component mount
    console.log('🔥Component update');
    // useRef value stored in .current property
    timer.current = setInterval(() => {
      setCount((v) => v + 1);
    }, 1000);
  }, []);

  React.useEffect(() => {
    // clear on component unmount
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div>
      <div>Interval is working, count is: {count}</div>
    </div>
  );
}

export default Counter;
