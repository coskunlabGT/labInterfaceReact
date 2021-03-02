import React from 'react'
import {API} from '../../Main/constants'
import FormComponent from './FormComponent'
import { withRouter } from 'react-router-dom';
import { selected_id, page_type } from './UserTable'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: "",
            name: "",
            email: "",
            role: "",
            phone_number: "",
            page_type: page_type
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        if (this.state.page_type === 'Add') {
            this.setState({
                name: "",
                role: "Student",
                email: "",
                phone_number: "",
            })
        } else {
            const link =  API + '/UserManagement/get-Users/?user_id=' + selected_id

            let data = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            await fetch(link, data)
                .then(response => response.json())
                .then(response => {
                    this.setState({
                        user_id: response.id,
                        name: response.name,
                        email: response.email,
                        role: response.role,
                        phone_number: response.phone_number,
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
            const link = API + '/UserManagement/add-User/'
            const data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email:  this.state.email,
                    role:  this.state.role,
                    phone_number:  this.state.phone_number
                })
            }
            fetch(link,data)
            .catch(error => {console.log(error)})
            this.props.history.push('/admin/users')
        } else {
            event.preventDefault()
            const link = API + '/UserManagement/update-User/?user_id=' + selected_id + '/'
            const data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }

            fetch(link, data)
            .catch(error => {console.log(error)})
            this.props.history.push('/admin/users')
        }
        this.setState({
            user_id: "",
            name: "",
            email: "",
            role: "",
            phone_number: "",
        })
        window.location.reload();
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