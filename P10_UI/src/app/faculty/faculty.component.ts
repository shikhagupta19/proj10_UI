import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
super(locator.endpoints.FACULTY, locator,route );
   }

   populateForm(form,data){
    form.id=data.id;
    form.firstName=data.firstName;
    form.lastName=data.lastName;
    form.gender=data.gender;
    form.dob=data.dob;
    form.mobileNo=data.mobileNo;
    form.emailId=data.emailId;
    form.qualification=data.qualification;
    form.collegeId=data.collegeId;
    form.courseId=data.courseId;
    form.subjectId=data.subjectId;

  }

}
