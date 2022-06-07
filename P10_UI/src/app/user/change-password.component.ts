import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'url';
import { BaseCtl } from '../base.component';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styles: []
})
export class ChangePasswordComponent extends BaseCtl {

  constructor( public locator:ServiceLocatorService, public route:ActivatedRoute , public httpService:HttpServiceService) {
    super(locator.endpoints.USER,locator,route);
   }



  
  changePassword(){
   var _self = this;
   this.form.data["loginId"]= localStorage.getItem("email")
    this.httpService.post("http://localhost:8081/User/changepass",this.form.data,function (res){
      _self.form.message='';
      _self.form.inputerror='';
      if(res.success){
        _self.form.error =false;
        _self.form.list = res.result.data;
        _self.form.message = res.result.message;
      

      }
      else {
        if(!res.success)
{
    console.log("when res is failed")
          _self.form.error = true;
          
          _self.form.message = res.result.message;
          console.log("******" + _self.form.message)
          if(_self.form.message==undefined){
            _self.form.inputerror = res.result.inputerror;
         }
}
      }
         });
  }
  }


