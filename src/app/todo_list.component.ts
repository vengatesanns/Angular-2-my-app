import {Component,OnInit} from '@angular/core';
import {Todo_ListService} from './todo_List.service';
@Component({
    selector:'todo_list',
    templateUrl:'./todo.component.html',
    providers:[Todo_ListService]

})
export class TodoList implements OnInit
{
   events:any=[];

   constructor(private tService:Todo_ListService)
   {
    
   }

   ngOnInit()
   {

     return this.tService.getListOfEvents()
      .subscribe(allEvents=>this.events=allEvents);
   }


}