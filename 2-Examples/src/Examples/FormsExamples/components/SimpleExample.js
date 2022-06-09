import React from 'react';

function SimpleExample() {
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState('unknown');

  const [children, setChildren] = React.useState(true);

  const [country, setCountry] = React.useState('VN');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Children:', children);
    console.log('Country:', country);
  };

  return (
    <div style={{ display: 'flex', padding: 24 }}>
      <div style={{}}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Name'
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <hr />

          <input
            type='radio'
            name='gender'
            value={gender}
            onChange={(e) => {
              setGender('man');
            }}
          />
          <label for='gender'>Man</label>

          <input
            type='radio'
            name='gender'
            value={gender}
            onChange={(e) => {
              setGender('woman');
            }}
          />
          <label for='gender'>Woman</label>

          <input
            type='radio'
            name='gender'
            value={gender}
            onChange={(e) => {
              setGender('unknown');
            }}
          />
          <label for='gender'>Unknown</label>
          <hr />
          <input
            type='checkbox'
            name='children'
            value={children}
            onChange={(e) => {
              setChildren(e.target.checked);
            }}
          />
          <hr />
          <select
            name='country'
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value='VN'>Vietnam</option>
            <option value='US'>United State</option>
            <option value='JP'>Japan</option>
          </select>
          <hr />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SimpleExample;
