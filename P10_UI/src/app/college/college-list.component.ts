import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styles: []
})
export class CollegeListComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.COLLEGE, locator,route);
   }

  // reset(){
  //   console.log("click reset--------------------")
  //   this.display();
  // }
}
