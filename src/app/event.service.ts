import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EventService
{
    constructor(private http:Http)
    {

    }
       addEvents(events)
    {
        console.log("service calls");
      return  this.http.post("http://localhost:8080/listEvents",events)
                    .map((response)=>response.json());
    }

}