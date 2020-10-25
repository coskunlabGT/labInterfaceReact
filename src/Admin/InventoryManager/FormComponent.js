import React from 'react'
import Item from './components/Item'
import CurrentQuantity from "./components/CurrentQuantity"
import MinQuantity from "./components/MinQuantity"
import Admin from '../Admin.css'
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className="admin">
            <h1 id="form-title">Add Item</h1>
            <form onSubmit = {props.handleSubmit}>
                <Item
                    item_id = {props.data.item_id}
                    handleChange = {props.handleChange}
                />
                <CurrentQuantity
                    current_quantity = {props.data.current_quantity}
                    handleChange = {props.handleChange}
                />
                <MinQuantity
                    min_quantity = {props.data.min_quantity}
                    handleChange = {props.handleChange}
                />
                <div className = "buttons">
                    <button id = "submit" type = "submit">Submit</button>
                    <Link to =  "/admin/inventory" id = "back">Back</Link>
                </div>
            </form>
        </div>
    )
}

export default FormComponent