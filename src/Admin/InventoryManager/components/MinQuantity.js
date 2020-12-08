import React from 'react'

function MinQuantity(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Minimum Quantity</h3>
            <input
                id="min-quantity"
                type="number"
                name="min_quantity"
                min="0"
                value = {props.min_quantity}
                onChange = {props.handleChange}
            />
        </div>
    )
}

export default MinQuantity