import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item_id: "",
            current_quantity: "",
            min_quantity: "",
            page_type: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() { //for edit

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