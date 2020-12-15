import React from 'react'
import InputItem from './components/Item'
import Quantity from './components/Quantity'
import User from './components/User'
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className = "quick-order">
            <h1 className = "order-title">Quick Order</h1>
            <form onSubmit = {props.handleSubmit}>
                <InputItem 
                    items = {props.data.items}
                    item_id = {props.data.item_id}
                    handleChange = {props.handleChange}
                />
                <Quantity
                    requested_quantity = {props.data.requested_quantity}
                    handleChange = {props.handleChange}
                />
                <User
                    students = {props.data.students}
                    user = {props.data.user}
                    handleChange = {props.handleChange}                        
                />
                <div className = "form-buttons">
                    <button className = "submit" type = "submit">Submit</button>
                    <Link to =  "/inventory" className = "back">Back</Link>
                </div>
            </form>
             
        </div>
    

    )
}

export default FormComponent