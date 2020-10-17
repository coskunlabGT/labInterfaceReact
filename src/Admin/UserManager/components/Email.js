import React from 'react'

function Email() {
    return (
        <div className="admin-input">
            <h3 className = "label">Email</h3>
            <input
                id="email"
                type="email"
                name="email"
                required
            />
        </div>
    )
}

export default Email