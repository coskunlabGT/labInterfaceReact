import React from 'react'
import {API, LOCAL_HOST} from '../../Main/constants'
import FormComponent from './FormComponent'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            item_id: "",
            requested_quantity: "",
            user: "",
            students: [],
            items: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch({API}.API + '/QuickOrder/inventory/')
            .then((response) => response.json())
            .then(data => {
                let inventory = data.map(item => {
                    return {value: item.id, display: item.item_name}
                })
                this.setState({
                    items: [{value: '', display: ''}].concat(inventory)
                })
            }).catch(error => {
                console.log(error);
            })

            fetch({API}.API + '/UserManagement/get-Users/')
            .then((response) => response.json())
            .then(data => {
                let users = data.map(user => {
                    return {value: user.id, display: user.name}
                })
                this.setState({
                    students: [{value: '', display: ''}].concat(users)
                })
            }).catch(error => {
                console.log(error);
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const link = {API}.API+ '/QuickOrder/add-order/'
        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }

        fetch(link,data)
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})

        window.location = {LOCAL_HOST}.LOCAL_HOST + "/orders"
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

export default Form