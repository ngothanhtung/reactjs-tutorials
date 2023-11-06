import React from 'react';

export default function UseMemoHookExamples() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState<any[]>([]);

  const expensiveFunction = (number: number) => {
    console.log('Calculating...');
    const max = 1000000000;

    // expensive calculation
    for (let i = 0; i < max; i++) {
      number += 1;
    }

    return number;
  };

  // Without React.useMemo(arrow_function)
  const calculation = expensiveFunction(count);

  // Within React.useMemo((arrow_function))
  // const calculation = React.useMemo(() => {
  //   return expensiveFunction(count);
  // }, [count]);

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
      <h2>Count: {count}</h2>

      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Increase Count
      </button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
  );
}
