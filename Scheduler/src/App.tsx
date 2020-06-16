import React,{Component} from 'react';
import './App.css';
import {Inject, ScheduleComponent, Day,Week,Month,Agenda} from '@syncfusion/ej2-react-schedule';
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'
import { Ajax } from '@syncfusion/ej2-base';
import * as ReactDOM from "react-dom";
import { start } from 'repl';

export default class App extends Component{
  constructor(props:any) {
    super(props);
    this.state = {
      Title:"",
      Location:"",
      Description:"",
      Start:"",
      End:"",
    }
  }

  componentDidMount() {
    this.postEvent();
  }

  postEvent() {
    console.log(this.state)
    const link = 'http://127.0.0.1:8000/calendar/api/event/';
    let data = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
body:JSON.stringify({
         "summary": document.getElementById("Subject"),
          "location": "test",
           "description": "test",
          "start": ,
          "end": 
        })

        
          
      
    

    }
    
    fetch(link, data)
    .then(response => response.json())  // promise
    .then(response => {
        this.setState({event: response});
        console.log(response)

    })
  }


 







  private remoteData = new DataManager({
    url:'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true





  });
  
  public render(){
   


    return <ScheduleComponent currentView='Month'>
      <Inject services={[Day, Week,Month,Agenda]}/>
    </ScheduleComponent>
  }
}


