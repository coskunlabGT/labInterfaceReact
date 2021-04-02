import React from 'react'

function Item(props) {
    return (
        <div>
            <h3 className = "label">Item</h3>
            <input
            type = "text"  
            id = "item-name"
            name = "item_name"
            value = {props.item_name} 
            onChange = {props.handleChange} 
            required
            />
        </div>
    )


}

export default Item