import React from 'react';
import logo from './logo.svg';
import './App.css';

import DynamicForm from '@bit/softech.dynamic-report.dynamic-form';

function App() {
  return (
    <div className='App'>
      <DynamicForm
        id='5f40a5eee833c81de833fc3f'
        onSubmit={(values) => {
          console.log(values);
        }}
        onError={(error) => {
          console.warn(error);
        }}
      />
    </div>
  );
}

export default App;
