import React from 'react';

type Props = {};

export default function BasicForm({}: Props) {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [country, setCountry] = React.useState('VN');

  return (
    <div>
      <h1>Basic Form</h1>
      <form
        action='https://server.aptech.io/register'
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ name, address, country });
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type='text'
            placeholder='Enter your name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='text'
            placeholder='Enter your address'
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <select
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value='VN'>Viet Nam</option>
            <option value='JP'>Japan</option>
            <option value='EN'>England</option>
          </select>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}
