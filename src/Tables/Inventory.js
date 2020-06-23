import React from 'react'

class Inventory extends React.Component {
    constructor() {
        super()
        this.state = {
            items: [],
            loading: false
        }
        this.compareBy = this.compareBy.bind(this)
        this.sortBy = this.sortBy.bind(this)
    }

    componentDidMount() {
        this.setState({loading: true})
        let link = 'http://127.0.0.1:8000/QuickOrder/inventory/'
        let data = {
            method: 'GET',
        }
        fetch(link, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    items: [response],
                    loading: false
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
        console.log(selected)
        let arrayCopy = this.state.items[0]
        arrayCopy.sort(this.compareBy(selected[0], selected[1]))
        this.setState({order: [arrayCopy]})
    }

    render() {
        return (
            <div>

                <div className = "heading">
                    <h1 className = "title">Inventory Items</h1>
                    <div className = "arrange">
                        
                        <p className = "indicator">Sort By</p>
                        <select 
                            className = "sort"
                            class = 'form-control'
                            onChange = {this.sortBy}
                            >
                            <option value = "item_name:1">A to Z</option>
                            <option value = "item_name:2">Z to A</option>
                            <option value = "refill_needed:2">Refill Needed</option>
                        </select>
                    
                    </div>
                </div>
                
                <div className = "table">
                    <table>
                        
                        <thead className = 'headers'>
                            <tr id = "table">
                                <th style={{width:"150px", height: "35px"}}>Item</th>
                                <th style={{width:"150px"}}>Current Quantity</th>
                                <th style={{width:"150px"}}>Min Quantity</th>
                                <th style={{width:"150px"}}>Refill Needed</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                {this.state.items.map( inventory => {
                                    return(
                                        inventory.map((item, index) => {
                                            const {item_name, current_quantity, min_quantity, refill_needed} = item
                                            return(
                                                    <tr key = {index} className = "data">
                                                        <td style = {{height: "70px"}}>{item_name}</td>
                                                        <td>{current_quantity}</td>
                                                        <td>{min_quantity}</td>
                                                        <td>{refill_needed.toString()}</td>
                                                    </tr>
                                                )
                                        })
                                    )
                                })}
                            </tbody>
                    
                    </table>
                    
                    <div className = "inventoryButtons">
                        <a href = "http://localhost:3000/quickOrder">Quick Order</a>
                        <a href = "http://localhost:3000/orders">Order History</a>
                    </div>
                
                </div>
            </div>
        )
    }

}

export default Inventory