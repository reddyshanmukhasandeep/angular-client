import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import  {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';


const ROUTES: Routes =[
{path:'AddProject', component:AddProjectComponent},
{path:'AddTask', component:AddTaskComponent},
{path:'AddUser', component:AddUserComponent},
{path:'ViewTask',component:ViewTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddProjectComponent,
    AddTaskComponent,
    ViewTaskComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
