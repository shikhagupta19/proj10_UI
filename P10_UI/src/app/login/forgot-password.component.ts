import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { DataValidatorService } from '../data-validator.service';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private locator: ServiceLocatorService, private dataValidator: DataValidatorService, private route: ActivatedRoute, private httpservice: HttpServiceService) {

  }
  ngOnInit() {

  }

  endpoint = "http://localhost:8081/Auth/forgetPassword";

  // validate() {
  //   let flag = true;
  //   flag = flag && this.dataValidator.isNotNull(this.form.loginId{});
  //   return flag;
  // }
  form = {
    error: false,
    message: "",
    data: {login:''}
  };

  inputerror = {};
  message = '';






  submit() {
    let _self = this;
    console.log("inside FP " + _self.endpoint);
    console.log("email------- " + this.form.data.login)
    this.httpservice.post(_self.endpoint, this.form.data, function (res) {
      console.log("myresponse" + res);

      _self.form.message = '';

      _self.inputerror = {};
      if (res.success) {
        _self.form.error = false;
        _self.form.message = res.result.message
      }
      else {
        if (!res.success) {
          _self.form.error = true;
          console.log("inside FP res false" + _self.form.message)
          _self.form.message = res.result.message

          if(_self.form.message==undefined){
            _self.inputerror = res.result.inputerror;
         }
          
        }
      }

    })


  }

}
