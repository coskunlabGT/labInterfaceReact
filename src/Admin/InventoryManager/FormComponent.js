import React from 'react'
import Item from './components/Item'
import CurrentQuantity from "./components/CurrentQuantity"
import MinQuantity from "./components/MinQuantity"
import { Link } from 'react-router-dom'

function FormComponent(props) {
    return(
        <div className="admin">
            <h1 id="form-title">{props.data.page_type} Item</h1>
            <form onSubmit = {props.handleSubmit}>
                <Item
                    item_name = {props.data.item_name}
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
                <div className = "form-buttons">
                    <button className = "submit" type = "submit">Submit</button>
                    <Link to =  "/admin/inventory" className = "back">Back</Link>
                </div>
            </form>
        </div>
    )
}

export default FormComponent