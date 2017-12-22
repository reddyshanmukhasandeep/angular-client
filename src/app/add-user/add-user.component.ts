import { Component, OnInit } from '@angular/core';
import {User} from '../user' ;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
userList:User[]=[];

 addUser(form){
  var user:User;
  console.log("form "+form.value);
  user=form.value;
  console.log("user"+user)
  this.userList.push(user);
  form.resetForm();
 }
 ResettingForm(form){
   form.resetForm();
 }
  constructor() { }

  ngOnInit() {
  }

}
