import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.STUDENT, locator,route);
   }


  populateForm(form,data){
    
    form.firstName=data.firstName;
    form.lastName=data.lastName;
    form.dob=data.dob;
    form.email=data.email;
    form.mobileNo=data.mobileNo;
    form.enrolNo=data.enrolNo;
    form.collegeId=data.collegeId;
    
  }

}
