import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';
import { selected_id, page_type } from './UserTable'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "",
            role: "",
            email: "",
            phone: "",
            page_type: page_type,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.page_type === 'Add') {
            this.setState({
                user_name: "",
                role: "",
                email: "",
                phone: "",
            })
        } else {
            const link =  {API}.API + '/UserManagement/get-Users/?user_id=' + selected_id
            let data = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
            }
            
            fetch(link, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    user_name: response.name,
                    role: response.role,
                    email: response.email,
                    phone: response.phone_number,
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        if (this.state.page_type === 'Add') {
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
            event.preventDefault()
            const data = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }
        }
        this.setState({
            user_name: "",
            role: "",
            email: "",
            phone: "",
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