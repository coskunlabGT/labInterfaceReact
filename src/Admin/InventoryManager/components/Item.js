import React from 'react'

function Item() {
    return (
        <div className="admin-input">
            <h3 className="label">Item</h3>
            <input
                id="item-name"
                type="text"
                name="item_name"
            />
        </div>
    )
}

export default Item