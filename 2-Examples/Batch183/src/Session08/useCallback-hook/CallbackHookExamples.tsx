import React from 'react';
import Counter from './Counter';
import Button from './Button';

export default function CallbackHookExamples() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(1000);

  // USE CALLBACK
  const increaseAge = React.useCallback(() => {
    setAge((x) => x + 1);
  }, []);

  const increaseSalary = React.useCallback(() => {
    setSalary((x) => x + 100);
  }, []);

  // NOT USE CALLBACK
  // const increaseAge = () => {
  //   setAge((x) => x + 1);
  // };

  // const increaseSalary = () => {
  //   setSalary((x) => x + 100);
  // };

  return (
    <div>
      <h2>useCallback hooks</h2>
      <hr />
      <Counter text='Age' count={age} />
      <Button handleClick={increaseAge}>Increase Age</Button>

      <Counter text='Salary' count={salary} />
      <Button handleClick={increaseSalary}>Increase Salary</Button>
    </div>
  );
}
