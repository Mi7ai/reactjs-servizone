import './App.css';
import Navbar from './components/navbar';
import Getall from './components/getall';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/">
        <Getall />
      </Route>
    </Router>
  );
}

export default App;
