import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent extends BaseCtl {

  
  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.SUBJECT, locator,route);
   }

   populateForm(form,data){
    form.id=data.id;
    console.log("id inside subject--------"+ form.id)
     form.subjectName=data.subjectName;
     form.description=data.description;
     form.courseId=data.courseId;
   }
}
