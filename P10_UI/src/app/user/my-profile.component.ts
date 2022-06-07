import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styles: []
})
export class MyProfileComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute,private httpClient: HttpClient) {
    super(locator.endpoints.USER, locator,route);
   }

  ngOnInit() {
  
  }

  


  populateForm(form,data){
    console.log("form id ====="+ form.id)
    form.id=data.id;
    form.firstName=data.firstName;
    form.lastName=data.lastName;
    form.gender=data.gender;
    form.dob=data.dob;
    form.phone=data.phone;
    form.email=data.email;
    form.password=data.password;
    form.roleId=data.roleId;
    form.status=data.status;

  }


}
