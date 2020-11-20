import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';
import { selected_id } from './InventoryTable'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_id: "",
            item_name: "",
            current_quantity: "",
            min_quantity: "",
            page_type: ""
    }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() { //for edit
        const link = {API}.API+ '/QuickOrder/get-item/' + selected_id + '/'
        let data = {
            method: 'GET',
        }

        await fetch(link, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    item_id: response.id,
                    item_name: response.item_name,
                    current_quantity: response.current_quantity,
                    min_quantity: response.min_quantity,
                })
            }).catch(error => {
                console.log(error)
            })
            console.log(this.state)

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        const page_type = this.state.page_type;
        if (page_type.equals("add")) {
            event.preventDefault()
            const link = {API}.API + ''
            const data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }
        } else { //edit
            const data = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }
        }

        this.setState({
            item_id: "",
            item_name: "",
            current_quantity: "",
            min_quantity: "",
        })

    }

    render() {
        return(
            <FormComponent
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            data = {this.state}
        />
        )
    }

}

export default withRouter(Form)