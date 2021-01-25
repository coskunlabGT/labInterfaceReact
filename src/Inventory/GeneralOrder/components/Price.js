import React from 'react'

function Price(props) {
    return (
        <div>
            <h3 className = "label">Price</h3>
            <input
            type = "decimal"  
            id = "price"
            name = "price"
            value = {props.price} 
            min = "0" 
            onChange = {props.handleChange} 
            required
            />
        </div>
    )
}

export default Price