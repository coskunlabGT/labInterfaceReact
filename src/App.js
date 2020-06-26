import React from 'react'
import { Route, BrowserRouter } from  'react-router-dom'

import Orders from './Inventory/Tables/Orders'
import Inventory from './Inventory/Tables/Inventory'
import Navbar from './Main/Navbar'
import FormContainer from './Inventory/QuickOrder/FormContainer'
import Home from './Home/Home'

import './Inventory/Inventory.css'
import './Main/Main.css'
import './Home/Home.css'

function App() {
  return (
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

          </Route>

          <Route path = '/calender'>

          </Route>

          <Route path = '/dashboards'>

          </Route>
        </div>
    </BrowserRouter>

  ); 
} 

export default App;