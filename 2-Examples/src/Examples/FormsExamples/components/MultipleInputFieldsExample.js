import React from 'react';

function MultipleInputFieldsExample() {
  const [inputs, setInputs] = React.useState({
    userName: 'tungnt',
    password: '123',
    gender: 'man',
    children: true,
    country: 'VN',
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setInputs((values) => ({ ...values, [e.target.name]: e.target.checked }));
    } else {
      setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='userName' value={inputs.userName} onChange={handleChange} />
        <input type='text' name='password' value={inputs.password} onChange={handleChange} />

        <input type='radio' name='gender' value='man' onChange={handleChange} />
        <label for='gender'>Man</label>
        <input type='radio' name='gender' value='woman' onChange={handleChange} />
        <label for='gender'>Woman</label>

        <input type='checkbox' name='children' value={inputs.children} onChange={handleChange} />
        <select name='country' value={inputs.country} onChange={handleChange}>
          <option value='VN'>Vietnam</option>
          <option value='US'>United State</option>
          <option value='JP'>Japan</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default MultipleInputFieldsExample;
