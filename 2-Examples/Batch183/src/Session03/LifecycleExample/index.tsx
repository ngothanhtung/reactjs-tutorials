import React from 'react';
import Gallery from '../Gallery';
import AutoPlayGallery from './AutoPlayGallery';

function LifecycleExample() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(100);

  const [mount, setMount] = React.useState(true);

  // Mounting: Là khi component được gắn vào Parent Component
  // React.useEffect(() => {
  //   console.log('LifecycleExample: MOUNTING');
  //   const intervalId = setInterval(() => {
  //     console.log('Running');
  //     setCount((c) => c + 1);
  //   }, 1000);

  //   return () => {
  //     console.log('Clear interval');
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // Updating: Sẽ chạy khi có bất kỳ state nào trong component thay đổi giá trị
  React.useEffect(() => {
    console.log('LifecycleExample: UPDATING');
  });

  // Updating (Dependencies)
  React.useEffect(() => {
    console.log('LifecycleExample: UPDATING DEPENDENCIES');
  }, [count2]);

  // UNMOUNTING
  React.useEffect(() => {
    return () => {
      console.log('LifecycleExample: UNMOUNTING');
    };
  }, []);

  return (
    <div>
      <h1>LifecycleExample</h1>
      <h2>Count: {count}</h2>
      <h2>Count 2: {count2}</h2>
      <button
        onClick={() => {
          // setCount(count + 1);
          setCount((c) => c + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          // setCount(count + 1);
          setCount2((c) => c + 1);
        }}
      >
        Increase 2
      </button>

      {mount && <AutoPlayGallery />}
      <button
        onClick={() => {
          setMount(false);
        }}
      >
        Unmount
      </button>
    </div>
  );
}

export default LifecycleExample;
