import React from 'react'
import UserName from './components/UserName'
import Role from './components/Role'
import Email from './components/Email'
import Phone from './components/Phone'
import Admin from '../Admin.css'
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className="admin">
            <h1 id="form-title">Add User</h1>
            <form onSubmit = {props.handleSubmit}>
                <UserName
                    name = {props.data.user_name}
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
                    phone = {props.data.phone}
                    handleChange = {props.handleChange}
                />
                <div className = "buttons">
                    <button id = "submit" type = "submit">Submit</button>
                    <Link to =  "/admin/users" id = "back">Back</Link>
                </div>
            </form>
        </div>
    )
}

export default FormComponent