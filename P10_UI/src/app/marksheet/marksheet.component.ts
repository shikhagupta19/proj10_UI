import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.MARKSHEET, locator,route);

}

populateForm(form, data){
form.studentId=data.studentId;
form.rollNo=data.rollNo;
form.physics=data.physics;
form.chemistry=data.chemistry;
form.maths=data.maths;
}

}
