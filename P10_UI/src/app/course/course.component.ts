import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.COURSE, locator,route);
  }

 populateForm(form,data){
   form.id=data.id;
   
   form.name=data.name;
   form.duration=data.duration;
   form.description=data.description;
 }
}
