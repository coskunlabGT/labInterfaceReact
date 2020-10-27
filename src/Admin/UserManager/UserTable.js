import React from 'react'
import { Link } from 'react-router-dom'

function UserTable(props) {
    return (
        <div>
            <form onSubmit = {props.onSubmit}>

                <div className = "heading">
                    <h1 className = "title">Users</h1>
                    <div className = "arrange">
                        <div className = "actions">
                            <button value = "add" onClick = {props.onButtonChange} type = "submit">Add</button>
                            <button value = "update" onClick = {props.onButtonChange} type = "submit">Update</button>
                            <button value = "delete" onClick = {props.onButtonChange} type = "submit">Delete</button>
                        </div>
                        <p className = "indicator">Sort By</p>
                        <select 
                            id = "sort"
                            className = 'form-control'
                            onChange = {props.sortBy}
                        >
                            <option value = "name:1">A to Z</option>
                            <option value = "name:2">Z to A</option>
                        </select>
                    
                    </div>
                </div>
                
                <div className = "table">

                    <table>
                        
                        <thead className = 'headers'>
                            <tr>
                                <th style={{width:"10px", height: "35px"}}> </th>
                                <th style={{width:"150px", height: "35px"}}>Name</th>
                                <th style={{width:"150px"}}>Role</th>
                                <th style={{width:"150px"}}>Email</th>
                                <th style={{width:"150px"}}>Phone Number</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                {props.users.map(person => {
                                    return(
                                        person.map((user, index) => {
                                            const {id, name, email, role, phone_number} = user
                                            return(
                                                <tr key = {index} className = "data">
                                                    <td style = {{height: "70px"}}>
                                                        <input type = "radio" name = "name"
                                                            value = {id}
                                                            // checked = {props.selectedUser == id}
                                                            onChange = {props.onChange}
                                                        />
                                                    </td>
                                                    <td>{name}</td>
                                                    <td>{role}</td>
                                                    <td>{email}</td>
                                                    <td>{phone_number}</td>
                                                </tr>
                                                )
                                        })
                                    )
                                })}
                                
                            </tbody>
                    
                    </table>
                </div>
            </form>
            <div className = "adminButtons">
                {/* <Link to = "/admin/messages">Messages</Link> */}
                <Link to = "/admin/inventory">Inventory</Link>
                <Link to = "/admin/users">Users</Link>
            </div>
        </div>
    )

}

export default UserTable