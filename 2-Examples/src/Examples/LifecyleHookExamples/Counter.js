import React from 'react';

function Counter() {
  // Sử dụng state
  const [count, setCount] = React.useState(0);

  const timer = React.useRef(null);

  // Updating: Lifecycle
  React.useEffect(() => {
    // component mount
    console.log('🔥Component update');
  });

  //
  React.useEffect(() => {
    // component mount
    console.log('🔥Component mounting');
    // useRef value stored in .current property
    timer.current = setInterval(() => {
      console.log('Timer running');
      setCount((v) => v + 1);
    }, 1000);
  }, []); //Dependencies

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
