import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {

    super(locator.endpoints.ROLE, locator, route);
   }

  

  populateForm(form,data){

    form.id=data.id;
    console.log("id inside role--------"+ form.id)
    form.name=data.name;
    console.log(form.name)
    form.discription=data.discription;
    console.log(form.discription)
  }


}
