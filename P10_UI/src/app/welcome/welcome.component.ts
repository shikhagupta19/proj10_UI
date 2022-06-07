import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  console.log("login or not --------------"+this.checkLogin())
  }
  loggedIn="{{'Welcome To NCS' | translate}}"
  welcome="{{'Welcome !! please Login or SignUp' | translate}}"


  checkLogin(){
    if(localStorage.getItem("jsessionId")==null || localStorage.getItem("jsessionId")==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  
}
