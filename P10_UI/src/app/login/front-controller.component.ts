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

  export class FrontControllerComponent implements OnInit {
    constructor(private httpservice :HttpServiceService, private route:Router,private serviceLocator:ServiceLocatorService, public route1:ActivatedRoute) {
        console.log("inside Front Ctl  constructor ");
    }
    
     ngOnInit() {
     console.log("inside login  ngOnInit");
     // this.isSessionExpired();
     }

     
    form = {
   
            };
    error= false;
  
    message= '';
    inputerror = {};
    
     isSessionExpired(){
        var sessionExpired : boolean=false;
        this.serviceLocator.getPathVariable(this.route1,function(params){
          console.log("session expired in path variable in front ctl -", params["id"]);
          sessionExpired = params["id"];
        })
        console.log("inside isSessionExpired, return value",sessionExpired);
          return sessionExpired;
      }
      
  }