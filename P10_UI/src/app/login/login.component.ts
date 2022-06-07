import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpservice :HttpServiceService, private route:Router,private serviceLocator:ServiceLocatorService, public route1:ActivatedRoute) {
    console.log("inside login constructor ");
   }


  ngOnInit() {
    console.log("inside login  ngOnInit");
   // this.isSessionExpired();
  }

  isSessionExpired(){
    var sessionExpired : boolean=false;
    this.serviceLocator.getPathVariable(this.route1,function(params){
      //console.log("session expired in path variable in Login ctl -", params["id"]);
      sessionExpired = params["id"];
    })
    console.log("inside isSessionExpired, return value",sessionExpired);
      return sessionExpired;
  }
  
  checkLogin(){
    if(localStorage.getItem("jsessionId")==null || localStorage.getItem("jsessionId")==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  

  form = {
   
  };
  error= false;
    
  message= '';
  inputerror = {};
  

  signIn(){
    let _self=this;
    this.httpservice.post("http://localhost:8081/Auth/login", this.form,function(res){
      _self.message='';
      _self.inputerror='';

     console.log("login response ------ "+res);
    if(res.success){
      
      console.log("jsessionid------------ "+res.result.jsessionid);
      localStorage.setItem("jsessionId", res.result.jsessionid);
      localStorage.setItem("name", res.result.data.firstName);     
      localStorage.setItem("email", res.result.data.email);
      localStorage.setItem("userid", res.result.data.id);
      _self.route.navigateByUrl("/welcome");
    }

    if(!res.success){
console.log("if response is fail ----------------")

      _self.error=true;
     _self.message= res.result.message

    //  _self.form.inputerror = res.result.message;
                console.log("******" + _self.message + _self.error
                )
                if(_self.message==undefined){
                  console.log("if input validation@@@@@@@@@@@");
                  _self.inputerror = res.result.inputerror;
               }
    }

    })
  }

  navigate(url){

    this.serviceLocator.forward(url);
  }
}
