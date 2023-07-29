import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/'>
          <h1>Home Page</h1>
        </Route>
        <Route path='/dashboard'>
          <h1>Dashboard</h1>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;