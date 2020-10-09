import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../Main/constants'

class UserTable extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: false
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        let userLink = {API}.API + '/UserManagement/get-Users/'
        let data = {
            method: 'GET',
        }
        fetch(userLink, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    users: [response],
                })
            }).catch(error => {
                console.log(error)
            })

    }

    compareBy(key, sort) {
        return function (a, b) {
            if (sort === "1") {
                if (a[key] < b[key])
                    return -1
                if (a[key] > b[key])
                    return 1
            }
            if (sort === "2") {
                if (a[key] < b[key])
                    return 1
                if (a[key] > b[key])
                    return -1 
            }
            return 0
        }
    }

    sortBy(event) {
        let selected = event.target.value.split(":")
        let arrayCopy = this.state.users[0]
        arrayCopy.sort(this.compareBy(selected[0], selected[1]))
        this.setState({users: [arrayCopy]})
    }

    onChange(event) {
        console.log(event.target.value)
    }


    render() {
        return (
            <div>

                <div className = "heading">
                    <h1 className = "title">Users</h1>
                    <div className = "arrange">
                        <p className = "indicator">Sort By</p>
                        <select 
                            id = "sort"
                            className = 'form-control'
                            onChange = {this.sortBy}
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
                                {this.state.users.map(person => {
                                    return(
                                        person.map((user, index) => {
                                            const {id, name, email, role, phone_number} = user
                                            return(
                                                <tr key = {index} className = "data">
                                                    <td style = {{height: "70px"}}>
                                                        <input type = "radio" name = "name"
                                                            value = {id}
                                                            onChange = {this.onChange}
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
                    
                    <div className = "inventoryButtons">
                        <Link to = "/admin/messages">Messages</Link>
                        <Link to = "/admin/inventory">Inventory</Link>
                        <Link to = "/admin/users">Users</Link>
                    </div>
                
                </div>
            </div>
        )
    }

}

export default UserTable