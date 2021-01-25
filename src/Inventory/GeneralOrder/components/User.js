import React from 'react'

function User(props) {
    return (
        <div>
            <h3 className = "label">User</h3>
            <input
            type = "text"  
            id = "student"
            name = "student_name"
            value = {props.student_name} 
            onChange = {props.handleChange} 
            required
            />
        </div>
    )


}

export default User