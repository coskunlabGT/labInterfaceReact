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
            token: "Token1",
            first_time: false,
            is_deleted: false,
            page_type: page_type
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        if (this.state.page_type === 'Add') {
            this.setState({
                name: "",
                role: "",
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
                        token: response.token,
                        first_time: response.first_time,
                        is_deleted: response.is_deleted
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
            console.log("Adding user");
            console.log(this.state)
            event.preventDefault()
            const link = API + '/UserManagement/add-User/'
            const data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state)
            }


            fetch(link,data)
            .then(console.log("success"))
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
            .then()
            .catch(error => {console.log(error)})
            this.props.history.push('/admin/users')
        }
        this.setState({
            user_id: "",
            name: "",
            email: "",
            role: "",
            phone_number: "",
            token: "",
            first_time: false,
            is_deleted: false,
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