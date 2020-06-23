import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className = "navbar">
                <li>
                    <a href = "http://localhost:3000/quickOrder">Home</a>
                </li>
                <li>
                    <a href = "http://localhost:3000/inventory">Inventory</a>
                </li>
                <li>
                    <a href = "http://localhost:3000/quickOrder">Levels</a>
                </li>                
                <li>
                    <a href = "http://localhost:3000/quickOrder">Calendar</a>
                </li>
                <li>
                    <a href = "http://localhost:3000/quickOrder">Dashboards</a>
                </li>            
            </nav>
            <ul>

            </ul>
        </div>
    )
}

export default Navbar