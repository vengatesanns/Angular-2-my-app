import { Routes,RouterModule } from '@angular/router';
import {TodoList} from './todo_list.component';
 import {EventComponent} from './Event.component';
 import {ModuleWithProviders} from '@angular/core';
 import {AppComponent} from './app.component'
 const routes:Routes=[
     {
        path:'todo_list',
        component: TodoList

     },
     {
        path:'new-Event',
        component: EventComponent
     },
      {
        path:'*',
        redirectTo:"new-Event"
     }
    
 ];

 export const routings:ModuleWithProviders=RouterModule.forRoot(routes);