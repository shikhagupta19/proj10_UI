import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styles: []
})
export class FacultyListComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.FACULTY, locator,route );
       }
    
 

}
