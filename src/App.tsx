import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
const { useState } = React;

function App() {
    const [count, setCount] = useState(0)

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The current count is {count}
        </p>
          <Button onClick={() => setCount(count + 1)}> Increment!</Button>
          <Button onClick={() => setCount(count - 1)}> Decrement!</Button>
          <Button onClick={() => setCount(0)}> Reset</Button>
      </header>
    </div>
  );
}

export default App;
