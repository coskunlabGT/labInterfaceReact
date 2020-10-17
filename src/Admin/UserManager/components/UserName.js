import React from 'react'

function UserName() {
    return (
        <div className="admin-input">
            <h3 className="label">Name</h3>
            <input
                id="name"
                type="text"
                name="user_name"
                required
            />
        </div>
    )
}

export default UserName