function Button() {
  const handleClick = () => {
    alert('Clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}

import PropTypes from 'prop-types';

function Greeting({ name }) {
  const [count, setCount] = useState(0);

  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

function User({ name, age }) {
  return (
    <div>
      {name}, {age}
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
};

// PropTypes: Example usage with array
Component.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Component.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

Component.propTypes = {
  onClick: PropTypes.func.isRequired,
};

Component.propTypes = {
  isValid: (props, propName, componentName) => {
    if (!props[propName]) {
      return new Error(`${propName} is required in ${componentName}`);
    }
  },
};
