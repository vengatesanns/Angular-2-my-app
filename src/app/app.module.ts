import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {TodoList} from './todo_list.component';
import {EventComponent} from './Event.component';
import {routings} from './app.routes';
@NgModule({

  imports: [BrowserModule,routings,FormsModule,HttpModule],
  declarations: [AppComponent,TodoList,EventComponent],
  bootstrap:[AppComponent]
})
export class AppModule
{
  
}


