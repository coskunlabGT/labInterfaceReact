import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GoogleBtn from '../GoogleBtn.js'
import { Redirect} from 'react-router-dom';

function Navbar() {
    const [isLogined, setIsLogined] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const setLoggedIn = token => {
      setIsLogined(true);
      setAccessToken(token);
      console.log(accessToken);
    }
    const setLoggedOut = () => {
      setAccessToken(null);
      setIsLogined(false);
      console.log(accessToken);
      this.props.history.push("/home");
    }
    return (
        <div>
            <nav className = "navbar">
                <GoogleBtn isLogined={isLogined} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut} />
                <NavLink
                    exact
                    activeClassName = "active"
                    className = "tab"
                    to = "/"
                >Home</NavLink>

                <NavLink
                    activeClassName = 'active'
                    className = 'tab'
                    to = {isLogined ? '/home' : '/'}
                >NewHome</NavLink>

                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = {isLogined ? "/inventory" : '/'}
                >Inventory</NavLink>

                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = {isLogined ? "/levels" : '/'}
                >Levels</NavLink>

               <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = {isLogined ? "/calendar" : '/'}
                >Calendar</NavLink>

                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = {isLogined ? "/dashboards" : '/'}
                >Dashboards</NavLink>

            </nav>
        </div>
    )
}

export default Navbar
