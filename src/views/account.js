import React from 'react';
import {
  NavLink,
  Switch,
  Route
} from 'react-router-dom';

import UserTab1 from '../components/user-tab-1';
import UserTab2 from '../components/user-tab-2';

function Account () {
  return (
    <div className="user-tab">
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Main information
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tab-2">
              Additional information
            </NavLink>
          </li>
        </ul>
      </div>
      
      <div className="user-tab-content">
        <Switch>
          <Route path="/" exact component={UserTab1} />
          <Route path="/tab-2" component={UserTab2} />
        </Switch>
      </div>
    </div>
  );
}

export default Account;
