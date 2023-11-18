import React from 'react';
import './App.css';
import Authors from './components/Authors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authors and Books</h1>
        <Authors />
      </header>
    </div>
  );
}

export default App;
