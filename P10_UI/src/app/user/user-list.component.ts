import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent extends BaseListCtl{

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) {
    super(locator.endpoints.USER, locator,route);
   }
   getCursor(rname){
    if(rname=='ADMIN')
    {return 'not-allowed';
    }
    else{
      return 'pointer';
    }
   }
   list:any[]
   getRole(rname){
     if(rname=='ADMIN')
     {return true;
     }
     else{
       return false;
     }
   }

}
