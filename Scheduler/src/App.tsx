/* import React,{Component} from 'react';
import './App.css';
import {Inject, ScheduleComponent, Day,Week,Month,Agenda} from '@syncfusion/ej2-react-schedule';
import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'
import { Ajax } from '@syncfusion/ej2-base';
import * as ReactDOM from "react-dom";
import { start } from 'repl';

export default class App extends Component{
  //window.onload = () => {
   constructor(props:any) {
    super(props);
    //this.action()
    this.state = {
      Title:"",
      Location:"",
      Description:"",
      Start:"",
      End:"",
    }
    
  }
//};

action() {
  let btn:HTMLElement=(document.getElementsByClassName("Edie-schedule-table e-content-tabletForm")[0] as HTMLElement)
  btn.onclick=()=>(console.log("hello"));

// let btn: HTMLElement = document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0] as HTMLElement;
// console.log("hello");
//  if(btn){
//    btn.onclick=() =>{return (this.postEvent)};
   
// }

};
secondaction(){

};


    componentDidMount() {

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
        "summary": (document.getElementById("Subject") as HTMLInputElement).value,
          "location": (document.getElementById("Location")as HTMLInputElement).value,
           "description": (document.getElementById("Description") as HTMLInputElement).value,
          "start":(document.getElementById("StartTime")as HTMLInputElement).value,
          "end":(document.getElementById("EndTime")as HTMLInputElement).value
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
  

  public render() {
    return <ScheduleComponent currentView='Month'>
      <Inject services={[Day, Week,Month,Agenda]}/> 
    </ScheduleComponent>
    
    
    
  } 

} */
  


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
    //this.action()
    this.state = {
      Title:"",
      Location:"",
      Description:"",
      Start:"",
      End:"",
    }
    
  }

action() {
  const cells : HTMLCollectionOf<Element> = document.getElementsByClassName("e-work-cells e-work-days");
  for (let cell of cells as any) {
    cell.addEventListener('click', () => {
      //console.log("cell click");
      //console.log(document.getElementsByClassName("e-event-create e-text-ellipsis e-control"));
      const boxes: HTMLCollectionOf<Element> = document.getElementsByClassName("e-event-create e-text-ellipsis e-control");
      setTimeout(() => {
        const submitButton = boxes[0] as HTMLElement;
        submitButton.addEventListener('click', () => {
          const subject: HTMLInputElement = document.getElementById("Subject") as HTMLInputElement
          const inputValue: string = subject.value
          

          console.log('submitted');
          console.log(inputValue);
        });
      }, 1000);
    });
  }
  //let btn:HTMLElement=(document.getElementsByClassName("Edie-schedule-table e-content-tabletForm")[0] as HTMLElement)
  //btn.onclick=()=>(console.log("hello"));

// let btn: HTMLElement = document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0] as HTMLElement;
// console.log("hello");
//  if(btn){
//    btn.onclick=() =>{return (this.postEvent)};
   
// }

};

secondaction(){

};

    componentDidMount() {
      window.addEventListener('load', this.action);
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
        "summary": (document.getElementById("Subject") as HTMLInputElement).value,
          "location": (document.getElementById("Location")as HTMLInputElement).value,
           "description": (document.getElementById("Description") as HTMLInputElement).value,
          "start":(document.getElementById("StartTime")as HTMLInputElement).value,
          "end":(document.getElementById("EndTime")as HTMLInputElement).value
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
  
  public render() {
    return <ScheduleComponent currentView='Month'>
      <Inject services={[Day, Week,Month,Agenda]}/> 
    </ScheduleComponent>
  
  } 

}

