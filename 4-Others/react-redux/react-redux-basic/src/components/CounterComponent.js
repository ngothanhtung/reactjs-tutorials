import React from 'react';

const CounterComponent = (props) => (
  <div>
    <button
      className="btn btn-primary"
      onClick={() => {
        props.decreaseCount(1);
      }}
    >
      Decrease
    </button>
    <button
      className="btn btn-primary"
      onClick={() => {
        props.increaseCount(1);
      }}
    >
      Increase
    </button>
    <hr />
    <h3>Counter: {props.count} </h3>
  </div>
)

export default CounterComponent;
