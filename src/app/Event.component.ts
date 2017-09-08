import { Component, OnInit } from "@angular/core";
import { EventService } from './event.service'
import { TodoEvent } from './TodoEvent';
@Component({
    selector: 'new-Event',
    templateUrl: './event.component.html',
    providers: [EventService]
})
export class EventComponent {
    eventName: string = " ";
    eventDescription: string = " ";
    location: string = "  ";
    date: string = " ";
    time: string = " ";
    td = new TodoEvent();

    constructor(private envservice: EventService) {

    }
    onLoad() {

        this.td.eventName = this.eventName;
        this.td.eventDescription = this.eventDescription;
        this.td.location = this.location;
        this.td.date = this.date;
        this.td.time = this.time;
          this.envservice.addEvents(this.td)
            .subscribe(res => { });
    }
}