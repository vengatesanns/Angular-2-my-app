import {Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
 @Injectable()
export class Todo_ListService
{

    constructor(private http:Http)
    {

    }
    getListOfEvents()
    {
        return this.http.get("http://localhost:8080/listEvents")
            .map((response:Response)=>response.json());
    }

}