import React from 'react'

function Item(props) {
    return (
        <div>
            <h3 className="label">Item</h3>
            <input
                id="item-name"
                type="text"
                name="item_name"
                value = {props.item_name}
                onChange = {props.handleChange}
            />
        </div>
    )
}

export default Item