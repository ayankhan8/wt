import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aadhartemplate } from '../update.service';
import { UserdbService } from '../userdb.service';

@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.css']
})
export class UserhistoryComponent implements OnInit {

  public userdetails : aadhartemplate[];

  constructor(private my_serivce : UserdbService,private route : Router) { 
    this.userdetails = [];
  }

  ngOnInit(): void {
    this.userdetails = this.my_serivce.getuserdetails();
    console.log(this.userdetails)
  }

  loginpage(){
    this.route.navigate([''])
  }



}
