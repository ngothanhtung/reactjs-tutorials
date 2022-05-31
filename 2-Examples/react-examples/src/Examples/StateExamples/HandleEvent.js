import React from 'react';

function HandleEvent() {
  const [text, setText] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  return (
    <div>
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
