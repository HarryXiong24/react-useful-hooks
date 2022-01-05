import React, { useState } from 'react';
import logo from '@/assets/logo.svg';
import routers from '@/router/index';
import { Link, useRoutes } from 'react-router-dom';
import './App.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const Element = () => useRoutes(routers);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() => setCount((number) => number + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link to="/" className="App-link">
            Home
          </Link>
          {' | '}
          <Link to="/demo" className="App-link">
            Demo
          </Link>
          {' | '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <Element />
      </header>
    </div>
  );
};

export default App;
