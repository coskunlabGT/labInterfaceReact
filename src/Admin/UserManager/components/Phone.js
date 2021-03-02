import React from 'react'

function Phone(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Phone</h3>
            <input
                id="phone"
                type="text"
                name="phone_number"
                value = {props.phone_number}
                onChange = {props.handleChange}
                placeholder="123-456-7890"
            />
        </div>
    )
}

export default Phone