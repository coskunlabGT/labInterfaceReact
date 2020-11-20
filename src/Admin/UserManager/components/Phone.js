import React from 'react'

function Phone(props) {
    return (
        <div className="admin-input">
            <h3 className="label">Phone</h3>
            <input
                id="phone"
                type="tel"
                name="phone"
                value = {props.phone}
                onChange = {props.handleChange}
                placeholder="(123) 456-7890"
                pattern="([0-9]{3}) [0-9]{3}-[0-9]{4}"
            />
        </div>
    )
}

export default Phone