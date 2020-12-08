import React from 'react'

function UserName(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Name</h3>
            <input
                id="name"
                type="text"
                name="user_name"
                value = {props.name}
                onChange = {props.handleChange}
                required
            />
        </div>
    )
}

export default UserName