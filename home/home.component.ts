import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aadhartemplate } from '../update.service';
import { UserdbService } from '../userdb.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  public placeholder : string = "";
  public placeholders : any;
  public userdetails : string[] = [];
  public username : string = "";


  constructor(private aadharservice : UserdbService,private route : Router) {
   }

  ngOnInit(): void {
    this.placeholders = this.aadharservice.getdetails();
   }

  

  addskill(plc : string){
    for(let i =0;i<this.placeholders.length;i++)
    {
      if(this.placeholders[i] == plc){
        alert("This field is updated");
        return;
      }
    }

    this.userdetails.push(plc);
  }

  update_aadhar(){
    this.aadharservice.adduserdetails(new aadhartemplate(this.username,this.userdetails))
  }

   display_aadhar(){
    this.route.navigate(['userhistory'])
  }

 

}
