// Implement navigation between views and routing

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import View1 from './View1';
import View2 from './View2';

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to='/view1'>View1</Link></li>
            <li><Link to='/view2'>View2</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/view1'>
            <View1 />
          </Route>
          <Route path='/view2'>
            <View2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;