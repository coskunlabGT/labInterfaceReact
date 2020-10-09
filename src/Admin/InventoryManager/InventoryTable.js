import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../Main/constants'

class InventoryTable extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            loading: false
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        let inventoryLink = {API}.API + '/QuickOrder/inventory/'
        let data = {
            method: 'GET',
        }
        fetch(inventoryLink, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: [response],
                })
                console.log(this.state.items)
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
        let arrayCopy = this.state.items[0]
        arrayCopy.sort(this.compareBy(selected[0], selected[1]))
        this.setState({order: [arrayCopy]})
    }


    render() {
        return (
            <div>

                <div className = "heading">
                    <h1 className = "title">Inventory Items</h1>
                    <div className = "arrange">
                        <p className = "indicator">Sort By</p>
                        <select 
                            id = "sort"
                            className = 'form-control'
                            onChange = {this.sortBy}
                        >
                            <option value = "item_name:1">A to Z</option>
                            <option value = "item_name:2">Z to A</option>
                        </select>
                    
                    </div>
                </div>
                
                <div className = "table">
                    <table>
                        
                        <thead className = 'headers'>
                            <tr>
                                <th style={{width:"10px", height: "35px"}}> </th>
                                <th style={{width:"150px", height: "35px"}}>Item</th>
                                <th style={{width:"150px"}}>Current Quantity</th>
                                <th style={{width:"150px"}}>Min Quantity</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                {this.state.items.map(inventory => {
                                    return(
                                        inventory.map((item, index) => {
                                            const {id, item_name, current_quantity, min_quantity} = item
                                            return(
                                                <tr key = {index} className = "data">
                                                    <td style = {{height: "70px"}}>
                                                        <input type = "radio" name = "name"
                                                            value = {id}
                                                            // onChange = {}
                                                        />
                                                    </td>
                                                    <td>{item_name}</td>
                                                    <td>{current_quantity}</td>
                                                    <td>{min_quantity}</td>
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

export default InventoryTable