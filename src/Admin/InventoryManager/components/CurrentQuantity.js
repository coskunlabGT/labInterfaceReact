import React from 'react'

function CurrentQuantity(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Current Quantity</h3>
            <input
                id="curr-quantity"
                type="number"
                name="current_quantity"
                min="0"
                value = {props.current_quantity}
                onChange = {props.handleChange}
            />
        </div>
    )
}

export default CurrentQuantity