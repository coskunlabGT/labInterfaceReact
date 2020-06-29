import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.calendarId = 'joshptl313@gmail.com';
        this.publicKey = 'AIzaSyA-Neq1tNL1WUSFRPGzMJTmxMKlYjBFG0E';
        this.dataManger = new DataManager({
            url: 'https://www.googleapis.com/calendar/v3/calendars/' + this.calendarId + '/events?key=' + this.publicKey,
            adaptor: new WebApiAdaptor,
            crossDomain: true
        });
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
                    StartTime: new Date(start),
                    EndTime: new Date(end),
                    IsAllDay: !event.start.dateTime
                });
            }
        }
        e.result = scheduleData;
    }
    render() {
        return <ScheduleComponent ref={schedule => this.scheduleObj = schedule} width='100%' height='550px' eventSettings={{ dataSource: this.dataManger }} dataBinding={this.onDataBinding.bind(this)}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
    </ScheduleComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('schedule'));