import React from 'react';

function EventHandlerExamples() {
  const [name, setName] = React.useState('John');

  return (
    <div>
      <input
        type='text'
        value={name}
        placeholder='Enter your name'
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default EventHandlerExamples;
