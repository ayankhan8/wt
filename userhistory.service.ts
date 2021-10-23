import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserhistoryService {

  public users = [
    {"username" : "abc", "password" : "123"}
  ];

  constructor() { }

  addUser(username : string, password : string){
    this.users.push({"username" : username, "password" : password});
    alert("User Added");
  }

  getusers() {
    return this.users;
  }
}
