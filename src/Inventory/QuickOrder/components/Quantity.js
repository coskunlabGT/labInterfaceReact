import React from 'react'

function Quantity(props) {
    return (
        <div className = "input">
            <h3 className = "label">Quantity</h3>
            <input
            type = "number"  
            name = "requested_quantity"
            id = "quantity"
            value = {props.quantity} 
            min = "0" onChange = {props.handleChange} 
            />
        </div>
    )
}

export default Quantity