import React from 'react'

function CurrentQuantity() {
    return (
        <div className="admin-input">
            <h3 className="label">Current Quantity</h3>
            <input
                id="curr-quantity"
                type="number"
                name="current_quantity"
                min="0"
            />
        </div>
    )
}

export default CurrentQuantity