import React from 'react'
import { Route, BrowserRouter } from  'react-router-dom'

import Orders from './Tables/Orders'
import Inventory from './Tables/Inventory'
import Navbar from './Main/Navbar'
import FormContainer from './QuickOrder/FormContainer'

import './App.css'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar />
          <Route path = '/quickOrder'>
            <FormContainer />
          </Route>
          <Route path = '/orders'>
            <Orders />
          </Route>
          <Route path = '/inventory'>
            <Inventory />
          </Route>
        </div>
    </BrowserRouter>

  ); 
} 

export default App;