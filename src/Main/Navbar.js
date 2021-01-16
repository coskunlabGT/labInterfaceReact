import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className = "navbar">
                <NavLink
                    exact
                    activeClassName = "active"
                    className = "tab"
                    to = "/about"
                >EZLabX</NavLink>

                <NavLink
                    exact
                    activeClassName = "active"
                    className = "tab"
                    to = "/"
                >Home</NavLink>
                    
                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = "/inventory"
                >Inventory</NavLink>  
                
                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = "/levels"
                >Levels</NavLink>
               
               <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = "/calendar"
                >Calendar</NavLink>
                
                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = "/dashboards"
                >Dashboards</NavLink>

                <NavLink
                    activeClassName = "active"
                    className = "tab"
                    to = "/admin/inventory"
                >Admin</NavLink>

            </nav>
        </div>
    )
}

export default Navbar