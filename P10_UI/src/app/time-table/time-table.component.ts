import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.TIMETABLE, locator,route);

}


populateForm(form,data){
  form.id=data.id;
 
  form.courseId=data.courseId;
  form.subjectId=data.subjectId;

  form.examDate=data.examDate;
  form.examTime=data.examTime;
  form.description=data.description;
  form.semester=data.semester;
 
  
}


}
