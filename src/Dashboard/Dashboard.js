import React, {Component} from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "N/A",
      selectedUserId: 0,
      selectedUserDashboard: [],
      allUsers: [],
      researchDisplayCurrent: "all"
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getResearch() {

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
        console.log(this.state)
    }).catch(err => {
        this.setState({selectedUserDashboard: []});
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
          this.state.selectedUserId =  element["id"];
          this.state.selectedUser =  name;
          this.getResearch();
      }
    })
  }

  changeResearchDisplay(name) {
    this.setState({researchDisplayCurrent: name})
  }

  displayResearch (element) {
    if(this.state.researchDisplayCurrent == "all") {
        return(<tr key={element['id']}>
      <th>{element["name"]}</th>
      <th>{element["description"]}</th>
      <th>{element["due_date"]}</th>
      <th>{element["approved"] == true ? "true" : "false"}</th>
      </tr>)
    } else if (this.state.researchDisplayCurrent == "current" && element["approved"] == true) {
      return(<tr key={element['id']}>
      <th>{element["name"]}</th>
      <th>{element["description"]}</th>
      <th>{element["due_date"]}</th>
      <th>true</th>
      </tr>)
    } else if (element["approved"] == false) {
  return(<tr key={element['id']}>
    <th>{element["name"]}</th>
    <th>{element["description"]}</th>
    <th>{element["due_date"]}</th>
    <th>false</th>
    </tr>)
    } 
  }

  render() {
    return (
      <div className="Main">
          <div>
            <h1>Student Name: {this.state.selectedUser}</h1>
            <div>
                <div>List of all Users</div>
                <select onChange={(option) => {
                  this.findUserId(option.target.value);
                }}>
                    {this.state.allUsers.map(element => {return <option key={element.id}>{element.name}</option>})}
                </select>
                <div>
                  <button onMouseDown={() => this.changeResearchDisplay("current")}>Current Research</button>
                </div>
                <div>
                  <button onMouseDown={() => this.changeResearchDisplay("future")}>Future Research</button>
                </div>
                <div>
                  <button onMouseDown={() => this.changeResearchDisplay("all")}>Deadlines</button>
                </div>
            </div>
          </div>
          <div className="outline">
            <h1>Current Research</h1>
            <table>
              <tbody>
                <tr>
                  <th style={{width:"200px"}}>Name</th>
                  <th style={{width:"500px"}}>Description</th>
                  <th style={{width:"150px"}}>Due Date</th>
                  <th style={{width:"150px"}}>Approved</th>
                </tr>
                {this.state.selectedUserDashboard.map(element => 
                {
                  return(this.displayResearch(element));
                })}
              </tbody>
            </table>
          </div>
      </div>
    );
  }
 
}



