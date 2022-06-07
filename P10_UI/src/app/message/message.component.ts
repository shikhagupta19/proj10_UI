import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent extends BaseCtl {

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute) { 
    super(locator.endpoints.MESSAGE,locator,route);
  }


}
