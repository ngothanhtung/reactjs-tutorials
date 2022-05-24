import React from 'react';
import Header from './components/Header';
import Block from './components/Block';
import Footer from './components/Footer';

import ChartBar from './components/ChartBar';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Header text='Aptech' color='red' size={32}></Header>
      <Header text='Google' color='green' size={24}></Header>

      <ChartBar text='BANDWIDTH' color1='#c0392b' color2='#e74c3c' percentage={20} />
      <ChartBar text='STORAGE' color1='#2980b9' color2='#3498db' percentage={50} />
      <ChartBar text='USERS' color1='#16a085' color2='#1abc9c' percentage={70} />
      <ChartBar text='VISITORS' color1='#d35400' color2='#e67e22' percentage={60} />
      <ChartBar text='EMAILS' />
      <ChartBar text='BASIC' />
      <ChartBar text='OTHERS' />

      <div style={{ display: 'flex' }}>
        <Block title='Declarative' content='React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.' />
        <Block title='Component-Based' content='Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.' />
        <Block title='Learn Once, Write Anywhere' content='We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.' />
      </div>
      <h1>{count}</h1>
      <button
        disabled={count === 1}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Previous
      </button>
      <button
        disabled={count === 4}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Next
      </button>
      <img alt='' src={`/images/${count}.jpeg`} style={{ width: '100%' }} />
      <Footer></Footer>
    </div>
  );
}

export default App;
