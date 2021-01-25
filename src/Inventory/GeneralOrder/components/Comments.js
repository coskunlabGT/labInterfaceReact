import React from 'react'

function Comments(props) {
    return (
        <div>
            <h3 className = "label">Additional Comments</h3>
            <textarea
            type = "text"  
            id = "comments"
            name = "additional_comments"
            value = {props.item_name} 
            onChange = {props.handleChange}
            placeholder = "Please include link to purchase item." 
            maxLength = "300"
            required
            />
        </div>
    )


}

export default Comments