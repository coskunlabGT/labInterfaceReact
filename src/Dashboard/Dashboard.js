import React, {Component} from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "N/A",
      selectedUserId: 0,
      selectedUserDashboard: [],
      allUsers: []
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getResearch() {
    console.log(this.state)
    const link = 'http://127.0.0.1:8000/UserManagement/get-Dashboard/';
    let data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "user_id": this.state.selectedUserId
        })
    }
    fetch(link, data)
    .then(response => response.json())  // promise
    .then(response => {
        this.setState({selectedUserDashboard: response});
    }).catch(err => {
      this.setState({selectedUserDashboard: []});
      console.log(err)
    })
  }

  getUser() {
    const link = 'http://127.0.0.1:8000/UserManagement/get-Users/';
    let data = {
        method: 'GET',
    }
    fetch(link, data)
    .then(response => response.json())  // promise
    .then(response => {
        this.setState({allUsers: response})
    }).catch(err => {
      console.log(err)
    })
  }

  findUserId(name) {
    this.state.allUsers.forEach(element => {
      if(element["name"] === name) {
        this.setState(
          {
            selectedUserId: element["id"],
            selectedUser: name
        });
      
      }
    })
  }

  render() {
    if (this.state.selectedUser != "N/A") {
      this.getResearch();
    }
    return (
      <div className="Main">
          <div>
            <p>Student Name: {this.state.selectedUser}</p>
            <div>
                <div>List of all Users</div>
                <select onChange={(option) => {
                  this.findUserId(option.target.value);
                }}>
                    {this.state.allUsers.map(element => {return <option key={element.id}>{element.name}</option>})}
                </select>
            </div>
          </div>
          <div>
            <p>Current Research</p>
            <table>
              <tr>
                <th style={{width:"200px"}}>Name</th>
                <th style={{width:"500px"}}>Description</th>
                <th style={{width:"150px"}}>Due Date</th>
              </tr>
              {this.state.selectedUserDashboard.map(element => 
              {
                return(<tr>
                  <th>{element["name"]}</th>
                  <th>{element["description"]}</th>
                  <th>{element["due_date"]}</th>
                </tr>)
              })}

            </table>
          </div>
      </div>
    );
  }
 
}



