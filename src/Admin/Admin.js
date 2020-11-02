// import React from 'react'
// import { Route, BrowserRouter, withRouter } from  'react-router-dom'
// import { API } from '../Main/constants'
// import FormComponent from './InventoryManager/FormComponent'


// class Admin extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: [],
//             users: [],
//             selectedQuery: "",
//             selectedButton: "",
//             item: {},
//             user: {},
//         }
//         this.compareBy = this.compareBy.bind(this)
//         this.sortBy = this.sortBy.bind(this)
//         this.onChange = this.onChange.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//         this.onButtonChange = this.onButtonChange.bind(this)
//     }

//     componentDidMount() {
//         let inventoryLink = {API}.API + '/QuickOrder/inventory/'
//         let data = {
//             method: 'GET',
//         }
//         fetch(inventoryLink, data)
//             .then(response => response.json())
//             .then(response => {
//                 this.setState({
//                     items: [response],
//                 })
//                 console.log(this.state.items)
//             }).catch(error => {
//                 console.log(error)
//             })

//         let userLink = {API}.API + '/UserManagement/get-Users/'
//         fetch(userLink, data)
//             .then(response => response.json())
//             .then(response => {
//                 this.setState({
//                     users: [response],
//                 })
//             }).catch(error => {
//                 console.log(error)
//             })
//     }

//     compareBy(key, sort) {
//         return function (a, b) {
//             if (sort === "1") {
//                 if (a[key] < b[key])
//                     return -1
//                 if (a[key] > b[key])
//                     return 1
//             }
//             if (sort === "2") {
//                 if (a[key] < b[key])
//                     return 1
//                 if (a[key] > b[key])
//                     return -1 
//             }
//             return 0
//         }
//     }

//     sortBy(event) {
//         let selected = event.target.value.split(":")
//         let arrayCopy = this.state.items[0]
//         arrayCopy.sort(this.compareBy(selected[0], selected[1]))
//         this.setState({order: [arrayCopy]})
//     }

//     onChange(event) {
//         this.setState({ selectedQuery: event.target.value})
//     }

//     onSubmit(event) {
//         event.preventDefault()
//         let button = this.state.selectedButton
//         let table = this.props.history.location.pathname.split('/admin/')

//         if (button === 'add') {
//             this.props.history.push(this.props.history.location.pathname + '/form')
//         }
//         if (button === 'update') {
//             if (table[1] === 'inventory') {
//                 const link = {API}.API+ '/QuickOrder/get-item/' + this.state.selectedQuery + '/'
//                 let data = {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                 }
//                 fetch(link, data)
//                 .then(response => response.json())
//                 .then(response => {
//                     this.setState({
//                         item: [response],
//                     })
//                     console.log(this.state.item.item_name)
//                 }).catch(error => {
//                     console.log(error)
//                 })
//                 this.props.history.push ('./inventory/form')

//             }

//             if (table[1] === 'users') {
//                 const link =  {API}.API + '/UserManagement/get-Users/?user_id=' + this.state.selectedQuery;
//                 let data = {
//                     method: 'GET',
//                     headers: {
//                     'Content-Type': 'application/json',
//                     }
//                 }
//                 fetch(link, data)
//                 .then(response => response.json())
//                 .then(response => {
//                     this.setState({
//                         user: [response],
//                     })
//                     console.log(response)
//                 }).catch(error => {
//                     console.log(error)
//                 })

//                 this.props.history.push('./users/form')
//             }

//         }
//         if (button === 'delete') {
//             if (table[1] === 'inventory') {

//             }
//             if (table[1] === 'users') {

//             }
//         }
//     }

//     onButtonChange(event) {
//         this.setState({ selectedButton: event.target.value})
//     }

//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({
//             [name] : value
//         })
//     }

//     handleInventorySubmit(event) {
//         const page_type = this.state.page_type;
//         if (page_type.equals("add")) {
//             event.preventDefault()
//             const link = {API}.API + ''
//             const data = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(this.state)
//             }
//         } else { //edit
//             const data = {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(this.state)
//             }
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <BrowserRouter>

//                     <Route exact path = '/admin/inventory/form'>
//                         <FormComponent
//                             handleChange = {this.handleChange}
//                             handleSubmit = {this.handleSubmit}
//                             item_name = {this.state.item.item_name}
//                             current_quantity = {this.state.item.current_quantity}
//                             min_quantity = {this.state.item.min_quantity}
//                         />
//                     </Route>

//                 </BrowserRouter>

//             </div>
//         )
//     }

// }

// export default withRouter(Admin)