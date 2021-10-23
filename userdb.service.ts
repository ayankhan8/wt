import { Injectable } from '@angular/core';
import { aadhartemplate } from './update.service';

@Injectable({
  providedIn: 'root'
})
export class UserdbService {

  public placeholders = [
    {"name" : "Name"},
    {"name" : "Phone Number"},
    {"name" : "DOB"},
    {"name" : "Address"},
    {"name" : "Aadhar"},


  ]

  public userdetail_history : aadhartemplate[] = [];
  constructor() { }

  getdetails() {
    return this.placeholders;
  }

  adduserdetails(usersdetails : aadhartemplate){
    this.userdetail_history.push(usersdetails)
  }

  getuserdetails(){
    return this.userdetail_history;
  }
}
