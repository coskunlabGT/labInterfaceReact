import React from 'react'

function Quantity(props) {
    return (
        <div>
            <h3 className = "label">Quantity</h3>
            <input
            type = "number"  
            id = "quantity"
            name = "requested_quantity"
            value = {props.requested_quantity} 
            min = "0" 
            onChange = {props.handleChange} 
            required
            />
        </div>
    )
}

export default Quantity