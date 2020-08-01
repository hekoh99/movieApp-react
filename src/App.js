import React from 'react';
import './App.css';
import Home from './routes/Home.js';
import About from './routes/About.js';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
