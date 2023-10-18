import React from 'react';

function HandleEvent() {
  const [text, setText] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    console.log('🦊 Click me');
  };
  const handleMouseEnter = () => {
    console.log('🦊 Mouse enter');
  };

  const handleMouseLeave = () => {
    console.log('🦊 Mouse leave');
  };

  const increaseCount = (number: number) => {
    // setCount(count + number);

    // React will batch the state update
    // SHORT HAND SYNTAX
    setCount((x) => x + number);

    // FULL SYNTAX
    setCount((x) => {
      return x + number;
    });
  };

  return (
    <div>
      <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Click me
      </button>

      <button onClick={() => increaseCount(5)}>Increase Count</button>

      <input
        onChange={(e) => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />

      <select
        onChange={(e) => {
          console.log(e.target.value);
          setSubject(e.target.value);
        }}
      >
        <option value='REACT'>React</option>
        <option value='NODEJS'>Nodejs</option>
      </select>

      <input
        type='checkbox'
        onChange={(e) => {
          console.log(e.target.checked);
          setChecked(e.target.checked);
        }}
      />
      <h1>{text}</h1>
      <h1>{subject}</h1>

      {checked && <div style={{ height: 200, width: 500, backgroundColor: 'yellow' }}>Please read me</div>}
    </div>
  );
}

export default HandleEvent;
