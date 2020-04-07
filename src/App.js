import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import NavBar from './components/navbar';
import Aside from './components/aside';
import Account from './views/account';

function App () {
  return (
    <div className="dashboard">
      <NavBar />
      <div className="container section-spacing">
        <Aside />
        
        <Switch>
          <Route 
            path="/" component={Account} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
