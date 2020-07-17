import React from 'react'
import InputItem from './components/Item'
import Quantity from './components/Quantity'
import User from './components/User'
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className = "quickOrder">
            <h1 id = "orderTitle">Quick Order</h1>
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
                <div className = "buttons">
                    <button id = "submit" type = "submit">Submit</button>
                    <Link to =  "/inventory" id = "back">Back</Link>
                </div>
            </form>
             
        </div>
    

    )
}

export default FormComponent