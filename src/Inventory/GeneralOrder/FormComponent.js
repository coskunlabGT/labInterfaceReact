import React from 'react'
import Item from './components/Item'
import Quantity from './components/Quantity'
import User from './components/User'
import Price from './components/Price'
import Comments from './components/Comments'
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className = "general-order">
            <h1 className = "order-title">General Order</h1>
            <form onSubmit = {props.handleSubmit}>
                <Item 
                    item_name = {props.data.item_name}
                    handleChange = {props.handleChange}
                />
                <Quantity
                    quantity = {props.data.quantity}
                    handleChange = {props.handleChange}
                />
                <Price
                    price = {props.data.price}
                    handleChange = {props.handleChange}
                />
                <User
                    student_name = {props.data.student_name}
                    handleChange = {props.handleChange}                        
                />
                <Comments
                    additional_comments = {props.data.additional_comments}
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