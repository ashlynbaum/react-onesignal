import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import runOneSignal from './onesignal';


function App() {

  useEffect(() => {
    runOneSignal();
  })
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Ashlyn's Test</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
