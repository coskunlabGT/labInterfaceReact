import React from 'react'

function User(props) {
    return (
        <div>
            <h3 className = "label">Name</h3>
            <select 
                id = "user"
                name = "user" 
                value = {props.user}
                onChange = {props.handleChange}
                required
                >
                {props.students.map(student => (
                    <option 
                        key = {student.value} 
                        value = {student.value}
                    >
                        {student.display}
                    </option>))}
            </select>
        </div>
    )


}

export default User