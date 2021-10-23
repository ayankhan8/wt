import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AadharService } from '../aadhar.service';
import { UserhistoryService } from '../userhistory.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username : string = "";
  public password : string = "";
   
  public users : any;
  constructor(private _userservice : UserhistoryService,private route : Router,private _aadharservice : AadharService) {

   }

  ngOnInit(): void {
  }

  register(){

    if(this.checkvalidity()){
      

        this._userservice.addUser(this.username,this.password);
    
    }
    
    
  }

  onLogin(){
    this.users = this._userservice.getusers();
    let check = 0;


    for(let i=0;i<this.users.length;i++){
      if(this.users[i].username == this.username && this.users[i].password == this.password){
        check = 1;
        this.route.navigate(['home']);
      }
    } 
    
    if(check == 0){
      alert("Invalid username and password")
    }
  }

  failed()
  {
    alert("Fields are empty");
  }

  checkvalidity()
  {
    if(this.username == "" || this.password == "" ){
      alert("fields are empty");
      return false;
  }
  else {
    return true;
  }
  }



}

