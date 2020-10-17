import React from 'react'

function MinQuantity() {
    return (
        <div className="admin-input">
            <h3 className="label">Minimum Quantity</h3>
            <input
                id="min-quantity"
                type="number"
                name="min_quantity"
                min="0"
            />
        </div>
    )
}

export default MinQuantity