import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { L10n } from '@syncfusion/ej2-base';
import { extend } from '@syncfusion/ej2-base';
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars';
L10n.load({
    'en-US': {
        'schedule': {
            'saveButton':'hello',
            'cancelButton': 'Close',
            'deleteButton': 'Remove',
            'newEvent': 'Add Event',
        },
    }
  });
  //APP
class App extends React.Component {
    constructor() {

      

        super(...arguments);

        this.state = {
          allEvents: [],
          selectedEvent:""
        }
        this.calendarId = 'joshptl313@gmail.com';
        this.publicKey = 'AIzaSyAtkTFNbS1ALE9zBhdRzAPyyW-LIAU_e7g';

        this.dataManger = new DataManager({
            url: 'https://www.googleapis.com/calendar/v3/calendars/' + this.calendarId + '/events?key=' + this.publicKey,
            adaptor: new WebApiAdaptor,
            crossDomain: true
    
        });
    }
  editorWindowTemplate(props){
return(< table className="custom-event-editor">
    <tbody>
        <tr>
            <td className="e-textlabel">Summary</td>
            <td><input id="Subject" className="e-subject e-field" name="Subject"/></td>
        
        </tr>
        <tr>
        <td className="e-textlabel">Location</td>
            <td><input id="Location" className="e-location e-field" name="Location"/></td>
        </tr>
        <tr>
        <td className="e-textlabel">StartTime</td>
        <td>
        <DateTimePickerComponent id="StartTime" data-name="StartTime" format="yyyy-MM-ddTHH:mm:ssZ"
        value={new Date(props.StartTime|| props.StartTime)}>
        </DateTimePickerComponent>
        </td>
        </tr>
        <tr>
        <td className="e-textlabel">EndTime</td>
        <td>
        <DateTimePickerComponent id="EndTime" data-name="EndTime" format="yyyy-MM-ddTHH:mm:ssZ"
        value={new Date(props.EndTime|| props.EndTime)}>
        </DateTimePickerComponent>
        </td>
        </tr>

        
        <tr><td className="e-textlabel">Description</td><td colSpan={4}>
        <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
      </td></tr>
      <tr>
        <td>
        <button className="e-control e-btn e-lib  e-event-cancel e-flat" id="Save">save</button>
        </td>
        </tr>
        <tr>
        <td>
        <button className="e-control e-btn e-lib  e-event-cancel e-flat" id="Delete" >Delete</button>
        </td>
        </tr>
        </tbody>
        </table>

    );

    
} 
    onDataBinding(e) {
        let items = e.result.items;
        let scheduleData = [];
        if (items.length > 0) {
            for (let i = 0; i < items.length; i++) {
                let event = items[i];
                let when = event.start.dateTime;
                let start = event.start.dateTime;
                let end = event.end.dateTime;
                if (!when) {
                    when = event.start.date;
                    start = event.start.date;
                    end = event.end.date;
                }
                scheduleData.push({
                    Id: event.id,
                    Subject: event.summary,
                    Location: event.location,
                    Description: event.description,
                    StartTime: new Date(start),
                    EndTime: new Date(end),
                    IsAllDay: !event.start.dateTime
                });
            }
        }
        e.result = scheduleData;
    }
    
   
    

      postEvent() {

        let cells = document.getElementsByClassName("e-work-cells");
        for (let cell of cells) {
          cell.addEventListener('click', () => {
            setTimeout(() => {
              const submitButton = document.getElementById("Save");
              submitButton.addEventListener('click', () => {
                //const submit=document.getElementsByClassName("e-control e-btn e-lib e-primary e-event-save e-flat")[0];
                //console.log(submit)
                //submit.addEventListener('click', () => {
                
        console.log(this.state)
        const link = 'http://127.0.0.1:8000/calendar/api/event/';
        let data = {
          
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
      body: JSON.stringify({
        "summary": (document.getElementById("Subject")).value,
          "location": (document.getElementById("Location")).value,
           "description": (document.getElementById("Description")).value,
          "start":(document.getElementById("StartTime")).value,
          "end":(document.getElementById("EndTime")).value
        })  
        }   
        console.log(data);
        console.log((document.getElementById("Subject")).value);
        fetch(link, data)
        .then(response => response.json())  // promise

         .then(response => {
            console.log(response)
            

    
        }) 
      });
      
  
    }, 1000);


  });
}
      }


      getEvents() {
        const link = 'http://127.0.0.1:8000/calendar/api/event/';
        let data = {
            method: 'GET',
        }
        fetch(link, data)
        .then(response => response.json())  // promise
        .then(response => {
            this.setState({allEvents: response})
        }).catch(err => {
          console.log(err)
        })
        return this.state.allEvents

      }


      findEvent(summary,location,description) {

        this.state.allEvents.forEach(element => {
          if(element["summary"] === summary && element["location"] === location && element["description"] === description) {
              this.state.selectedEvent =  element["id"];
          }
        })
      }
      
      deleteEvent(){

        let cells = document.getElementsByClassName("e-schedule-table")[0];
        //for (let cell of cells) {
          cells.addEventListener('click', () => {

            setTimeout(() => {

              const deleteee = document.getElementById("Delete");
              deleteee.addEventListener('click', () => {
                console.log("chillin");
                let arrayObject=[];
                let picked="";

                const link = 'http://127.0.0.1:8000/calendar/api/event/';
                let data = {
                    method: 'GET',
                }
                fetch(link, data)
                .then(response => response.json())  // promise
                .then(response => {
                  arrayObject=response;
                  return arrayObject
                })
                .then(response=>{
                  response.forEach(element => {
                    console.log(element)
                    if(element["summary"] === (document.getElementById("Subject")).value && element["location"] === (document.getElementById("Location")).value && element["description"] === (document.getElementById("Description")).value) {
                      
                      picked =  element["id"];
                      console.log(picked)
                    }
                  })

                  const link2 = 'http://127.0.0.1:8000/calendar/api/event/'+picked;
            
                  let data2 = {
              method: 'DELETE',
              headers: {"Access-Control-Allow-Origin": "*",
              "Access-Control-Expose-Headers": "Content-Length, X-JSON",
              "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization",
              "Access-Control-Allow-Origin": "www.localhost:8000",
              'Access-Control-Allow-Credentials': 'true'
            }

              }
              fetch(link2, data2)

                  })

                //this.findEvent((document.getElementById("Subject")).value,(document.getElementById("Location")).value, (document.getElementById("Description")).value)
                




                

              });
      
  
            }, 1000);
        
        
          });
        }

      //}
    
    


      
      
      
      close(args) {
        this.scheduleObj.closeEditor();
      }
      
      onPopupOpen(args) { 
        if(args.type === 'QuickInfo') { 
          var dialogObj = args.element.ej2_instances[0]; 
          dialogObj.hide(); 
          var currentAction = args.target.classList.contains('e-work-cells') ? 'Add' : 'Save'; 
          this.scheduleObj.openEditor(args.data, currentAction); 
          
          

        } 
        
      } 
        


          componentDidMount() {
            window.addEventListener('load', this.postEvent);
            window.addEventListener('load', this.deleteEvent);


          }

          
          
    render() {
        return <ScheduleComponent ref={schedule => this.scheduleObj = schedule} width='100%' height='550px' eventSettings={{ dataSource: this.dataManger }} editorTemplate={this.editorWindowTemplate.bind(this)}  popupOpen={this.onPopupOpen.bind(this)} getEvents={this.getEvents.bind(this)} dataBinding={this.onDataBinding.bind(this)  }>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;
    }
    
};

ReactDOM.render(<App />, document.getElementById('schedule'));