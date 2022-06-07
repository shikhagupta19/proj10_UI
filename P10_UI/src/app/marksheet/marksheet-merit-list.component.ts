import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-marksheet-merit-list',
  templateUrl: './marksheet-merit-list.component.html',
  styles: []
})
export class MarksheetMeritListComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpservice :HttpServiceService) {
    super(locator.endpoints.MARKSHEET, locator, route);

  }
  ngOnInit() {
    this.getMeritList();
  }


  getMeritList(){
    var _self = this;
  
    this.httpservice.get("http://localhost:8081/Marksheet/meritlist",function (res){
      
      if(res.success){
        _self.form.list = res.result.list;
        if(_self.form.list.length == 0){
          _self.form.message = "No record found";
          _self.form.error = true;
        }
        console.log("List Size",_self.form.list.length );
      }else{
        _self.form.error = false;
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }
}


