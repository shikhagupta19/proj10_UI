import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

import { EndpointServiceService } from '../endpoint-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styles: []
})
export class RoleListComponent extends BaseListCtl {

  constructor( public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.ROLE, locator,route);
   }

 

}
