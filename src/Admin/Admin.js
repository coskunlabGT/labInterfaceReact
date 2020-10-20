import React from 'react'
import { Route, BrowserRouter, Switch } from  'react-router-dom'
import { API } from '../Main/constants'
import InventoryTable from './InventoryManager/InventoryTable'
import UserTable from './UserManager/UserTable'



class Admin extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            users: [],
            selectedQuery: "",
            selectedButton: ""
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onButtonChange = this.onButtonChange.bind(this)
    }

    componentDidMount() {
        let inventoryLink = {API}.API + '/QuickOrder/inventory/'
        let data = {
            method: 'GET',
        }
        fetch(inventoryLink, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: [response],
                })
                console.log(this.state.items)
            }).catch(error => {
                console.log(error)
            })

        let userLink = {API}.API + '/UserManagement/get-Users/'
        fetch(userLink, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    users: [response],
                })
            }).catch(error => {
                console.log(error)
            })
    }

    compareBy(key, sort) {
        return function (a, b) {
            if (sort === "1") {
                if (a[key] < b[key])
                    return -1
                if (a[key] > b[key])
                    return 1
            }
            if (sort === "2") {
                if (a[key] < b[key])
                    return 1
                if (a[key] > b[key])
                    return -1 
            }
            return 0
        }
    }

    sortBy(event) {
        let selected = event.target.value.split(":")
        let arrayCopy = this.state.items[0]
        arrayCopy.sort(this.compareBy(selected[0], selected[1]))
        this.setState({order: [arrayCopy]})
    }

    onChange(event) {
        this.setState({ selectedQuery: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault()
        let button = this.state.selectedButton
        if (button == 'add') {

        }
        if (button == 'update') {
        }
        if (button == 'delete') {
        }
        // const link = {API}.API+ '/QuickOrder/add-order/'
        // const data = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(this.state)
        // }

        // fetch(link,data)
        // .then(response => {console.log(response)})
        // .catch(error => {console.log(error)})
        // this.props.history.push('../inventory')
        console.log(this.state.selectedButton);
    }

    onButtonChange(event) {
        this.setState({ selectedButton: event.target.value})
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path = '/admin/inventory'>
                        <InventoryTable 
                            compareBy = {this.compareBy}
                            sortBy = {this.sortBy}
                            onChange = {this.onChange}
                            onSubmit = {this.onSubmit}
                            onButtonChange = {this.onButtonChange}
                            items = {this.state.items}
                            selectedButton = {this.selectedButton}
                        />
                    </Route>
                    <Route exact path = '/admin/users'>
                        <UserTable
                            compareBy = {this.compareBy}
                            sortBy = {this.sortBy}
                            onChange = {this.onChange}
                            onSubmit = {this.onSubmit}
                            onButtonChange = {this.onButtonChange}
                            users = {this.state.users}
                            selectedButton = {this.selectedButton}
                        />
                    </Route>
                </BrowserRouter>

            </div>
        )
    }

}

export default Admin