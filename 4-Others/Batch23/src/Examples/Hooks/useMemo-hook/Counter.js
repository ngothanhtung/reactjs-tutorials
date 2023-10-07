// ? https://en.wikipedia.org/wiki/Memorization
import React from 'react';

const expensiveFunction = (number) => {
  console.log('Calculating...');
  const max = 1000000000;

  // expensive calculation
  for (let i = 0; i < max; i++) {
    number += 1;
  }

  return number;
};

function UseMemoExample() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState([]);

  // Without React.useMemo(arrow_function)
  // const calculation = expensiveFunction(count);

  // Within React.useMemo(arrow_function)
  const calculation = React.useMemo(() => {
    return expensiveFunction(count);
  }, [count]);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button
          onClick={() => {
            setTodos((t) => [...t, 'New Todo @ ' + new Date()]);
          }}
        >
          Add Todo
        </button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default UseMemoExample;
