import React from 'react';
import Count from '../components/Count';
import Button from '../components/Button';

export default function ParentComponent() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(1000);

  const increaseAge = React.useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const increaseSalary = React.useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  return (
    <div>
      <h2>useCallback hooks</h2>
      <hr />
      <Count text='Age' count={age} />
      <Button handleClick={increaseAge}>Increase Age</Button>

      <Count text='Salary' count={salary} />
      <Button handleClick={increaseSalary}>Increase Salary</Button>
    </div>
  );
}
