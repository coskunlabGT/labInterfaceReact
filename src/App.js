import React from 'react';
import { Route, BrowserRouter } from  'react-router-dom'

import Orders from './Inventory/Tables/Orders'
import Inventory from './Inventory/Tables/Inventory'
import Navbar from './Main/Navbar'
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
            <Route exact path = '/'>
              <Home />
            </Route>

            <Route exact path = '/inventory'>
              <Inventory />
            </Route>

            <Route path = '/inventory/quickOrder'>
              <FormContainer />
            </Route>

            <Route path = '/inventory/orders'>
              <Orders />
            </Route>

            <Route path = '/levels'>
              <Levels />
            </Route>

            <Route path = '/calender'>

            </Route>

            <Route path = '/dashboards'>
              <Dashboard />
            </Route>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;