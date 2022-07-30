import React from 'react';
import Count from './Count';
import Button from './Button';

function ReactMemo() {
  const [count, setCount] = React.useState(0);

  const [refresh, setRefresh] = React.useState(new Date());

  const increaseCount = () => {
    setCount((c) => c + 1);
  };
  // useCallback
  // const increaseCount = React.useCallback(() => {
  //   setCount((c) => c + 1);
  // }, []);

  return (
    <div>
      <Count count={count} text='I am count component' />

      <Button onClick={increaseCount}>I am button</Button>

      <button
        onClick={() => {
          setRefresh((r) => new Date());
        }}
      >
        Click me
      </button>

      <h1>{refresh.toString()}</h1>
    </div>
  );
}

export default ReactMemo;
