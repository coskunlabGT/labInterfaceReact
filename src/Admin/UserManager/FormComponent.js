import React from 'react'
import UserName from './components/UserName'
import Role from './components/Role'
import Email from './components/Email'
import Phone from './components/Phone'
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className="admin">
            <h1 id="form-title">{props.data.page_type} User</h1>
            <form onSubmit = {props.handleSubmit}>
                <UserName
                    name = {props.data.name}
                    handleChange = {props.handleChange}
                />
                <Role
                    role = {props.data.role}
                    handleChange = {props.handleChange}
                />
                <Email
                    email = {props.data.email}
                    handleChange = {props.handleChange}
                />
                <Phone
                    phone_number = {props.data.phone_number}
                    handleChange = {props.handleChange}
                />
                <div className = "form-buttons">
                    <button className = "submit" type = "submit">Submit</button>
                    <Link to =  "/admin/users" className = "back">Back</Link>
                </div>
            </form>
        </div>
    )
}

export default FormComponent