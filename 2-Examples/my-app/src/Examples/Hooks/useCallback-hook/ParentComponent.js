import React from 'react';
import Count from '../components/Count';
import Button from '../components/Button';

export default function ParentComponent() {
  const [age, setAge] = React.useState(18);
  const [salary, setSalary] = React.useState(1000);

  const increaseAge = React.useCallback(() => {
    setAge((a) => a + 1);
  }, []);

  // const increaseAge = () => {
  //   setAge((a) => a + 1);
  // };

  const increaseSalary = React.useCallback(() => {
    setSalary((s) => s + 100);
  }, []);

  // const increaseSalary = () => {
  //   setSalary((s) => s + 100);
  // };

  return (
    <div>
      <h2>useCallback hooks</h2>
      <hr />
      <Count text='Age' count={age} />
      <Button onClick={increaseAge}>Increase Age</Button>

      <Count text='Salary' count={salary} />
      <Button onClick={increaseSalary}>Increase Salary</Button>
    </div>
  );
}
