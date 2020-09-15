import React, {Component} from 'react';
import './Dashboard.css';
import {API} from '../Main/constants'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
      selectedUserId: 0,
      selectedUserDashboard: [],
      allUsers: [],
      researchDisplayCurrent: "All Research"
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getResearch() {
   	//const link = {API}.API + '/UserManagement/get-Dashboard/';
    const link =  'http://127.0.0.1:8000/UserManagement/get-Dashboard/?user_id=' + this.state.selectedUserId;
    let data = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
    }
    fetch(link, data)
    .then(response => response.json())  // promise
    .then(response => {
        this.setState({selectedUserDashboard: response});
        console.log(response)
    }).catch(err => {
        this.setState({selectedUserDashboard: []});
        console.log(err)
    })
  }

  getUser() {
    const link = {API}.API + '/UserManagement/get-Users/';
    let data = {
        method: 'GET',
    }
    fetch(link, data)
    .then(response => response.json())  // promise
    .then(response => {
        this.setState({allUsers: [{value: '', display: ''}].concat(response)})
    }).catch(err => {
      console.log(err)
    })
  }

  findUserId(name) {
    if (name === "") {
      this.setState({
        selectedUser: "",
        selectedUserId: 0,
        selectedUserDashboard: [],

      })
    }

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
    if(this.state.researchDisplayCurrent == "All Research") {
        return(<tr key={element['id']}>
          <td>{element["name"]}</td>
          <td><a href={element["description"]}>Google Doc</a></td>
          <td>{new Date(element["due_date"]).toLocaleDateString}</td>
          <td>{element["approved"]}</td>
      </tr>)
    } else if (this.state.researchDisplayCurrent == "Current Research" && element["approved"] == true) {
      return(<tr key={element['id']}>
        <td>{element["name"]}</td>
        <td><a href={element["description"]}>Google Doc</a></td>
        <td>{element["due_date"]}</td>
        <td>true</td>
      </tr>)
    } else  {
      return(
        <tr key={element['id']}>
          <td>{element["name"]}</td>
          <td><a href={element["description"]}>Google Doc</a></td>
          <td>{element["due_date"]}</td>
          <td>{element["approved"]}</td>
        </tr>)
    }
  }

  render() {
    return (
      <div className="Main">
          <div className = "left">
            <h1>Student: {this.state.selectedUser}</h1>
            <div className = "panel">
                {/* <div>List of all Users</div> */}
                <select id = "dropdown" onChange={(option) => {
                  this.findUserId(option.target.value);
                }}>
                    {this.state.allUsers.map(element => {return <option key={element.id}>{element.name}</option>})}
                </select>
               <div>
                  <button onMouseDown={() => this.changeResearchDisplay("Current Research")}>Current Research</button>
                </div>
                <div>
                  <button onMouseDown={() => this.changeResearchDisplay("Future Research")}>Future Research</button>
                </div>
                <div>
                  <button onMouseDown={() => this.changeResearchDisplay("All Research")}>Deadlines</button>
                </div>
            </div>
          </div>
          <div className="outline">
            <h1>{this.state.researchDisplayCurrent}</h1>
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
                  console.log(element)
                  return(this.displayResearch(element));
                })}
              </tbody>
            </table>
          </div>
      </div>
    );
  }

}
