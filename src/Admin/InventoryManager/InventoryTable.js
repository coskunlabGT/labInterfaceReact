import React from 'react'
import { Link } from 'react-router-dom'

function InventoryTable(props) {
    return (
        <div>
            <form onSubmit = {props.onSubmit}>
                <div className = "heading">
                    <h1 className = "title">Inventory Items</h1>
                    <div className = "arrange">
                        <div className = "actions">
                            <button button value = "add" onClick = {props.onButtonChange} type = "submit">Add</button>
                            <button value = "update" onClick = {props.onButtonChange} type = "submit">Update</button>
                            <button value = "delete" onClick = {props.onButtonChange} type = "submit">Delete</button>
                            </div>
                        <p className = "indicator">Sort By</p>
                        <select 
                            id = "sort"
                            className = 'form-control'
                            onChange = {props.sortBy}
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
                                {props.items.map(inventory => {
                                    return(
                                        inventory.map((item, index) => {
                                            const {id, item_name, current_quantity, min_quantity} = item
                                            return(
                                                <tr key = {index} className = "data">
                                                    <td style = {{height: "70px"}}>
                                                        <input type = "radio" name = "name"
                                                            value = {id}
                                                            // checked = {props.selectedItem == id}
                                                            onChange = {props.onChange}
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

export default InventoryTable