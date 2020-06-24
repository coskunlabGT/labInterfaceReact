import React, {Component} from 'react';

export default class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
        this.getInventory();
    }

    getInventory() {
        const link = 'http://127.0.0.1:8000/inventory/get-items/';
        let data = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
        fetch(link, data)
        .then(response => response.json())  // promise
        .then(response => {
            console.log(this.state)
            this.setState({inventory: response});
        }).catch(err => {
            console.log(err)
        })
    }

    displayInventory(element) {
        return(
            <tr key={element['id']}>
                <th>{element["item_name"]}</th>
                <th>{element["current_level"]}</th>
                <th>{element["target_level"]}</th>
                <th>{element["price"]}</th>
            </tr>
        )
    }

    render() {
        return (
          <div>
                <h1>Inventory</h1>
                <table>
                  <tbody>
                    <tr>
                      <th style={{width:"350px"}}>Name</th>
                      <th style={{width:"150px"}}>Current Level</th>
                      <th style={{width:"150px"}}>Target Level</th>
                      <th style={{width:"150px"}}>Price</th>
                    </tr>
                    {this.state.inventory.map(element => 
                    {
                      return(this.displayInventory(element));
                    })}
                  </tbody>
                </table>
            </div>
        );
    }    
}