import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_name: "",
            quantity: "",
            price: "",
            student_name: "",
            additional_comments: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const link = API + '' // insert link
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
        this.props.history.push('../inventory')
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