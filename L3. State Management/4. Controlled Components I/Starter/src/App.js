import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [mirrored, setMirrored] = useState('');

  const mirrorText = (text) => {
    setMirrored(text.split('').reverse().join(''));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          onChange={(event) => mirrorText(event.target.value)}
        />
        <p className="echo">Echo:{mirrored}</p>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    </div>
  );
};

export default App;
