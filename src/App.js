import React from 'react';
import { Route, BrowserRouter, Switch } from  'react-router-dom'

import Orders from './Inventory/Tables/Orders'
import Inventory from './Inventory/Tables/Inventory'
import Navbar from './Main/Navbar'
import PageNotFound from './Main/PageNotFound'
import FormContainer from './Inventory/QuickOrder/FormContainer'
import Home from './Home/Home'
import Dashboard from './Dashboard/Dashboard'
import Levels from "./Levels/Levels";


import './Inventory/Inventory.css'
import './Main/Main.css'
import './Home/Home.css'

function App() {
  return (
    <div>
      <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path = '/'>
                <Home />
              </Route>

              <Route exact path = '/inventory'>
                <Inventory />
              </Route>

              <Route exact path = '/inventory/quickOrder'>
                <FormContainer />
              </Route>

              <Route exact path = '/inventory/orders'>
                <Orders />
              </Route>

              <Route exact path = '/levels'>
                <Levels />
              </Route>

              <Route exact path = '/calendar'>

              </Route>

              <Route exact path = '/dashboards'>
                <Dashboard />
              </Route>

              <Route path = '*'>
                <PageNotFound />
              </Route>
            </Switch>
          </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
