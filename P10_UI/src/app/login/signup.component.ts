import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataValidatorService } from '../data-validator.service';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(private httpService:HttpServiceService, private route:ActivatedRoute, private dataValidator:DataValidatorService, private serviceLocator:ServiceLocatorService ) { }

  ngOnInit() {
   
  }
  endpoint = "http://localhost:8081/Auth/signUp";

  public form = {

    error: false, //error 
    message: '', //error or success message
    data: { id: null }, //form data
    inputerror: {}, // form input error messages
    
  };
  

  validate() {
    return this.validateForm(this.form);
  }

  
  validateForm(form) {
    console.log("validate form----------------------")
    let flag = true;
    let validator = this.dataValidator;
  
    flag = flag && validator.isNotNullObject(form.firstName);
    
    flag = flag && validator.isNotNullObject(form.lastName);
 
    flag = flag && validator.isNotNullObject(form.email);
    
    flag = flag && validator.isNotNullObject(form.password);
    
    flag = flag && validator.isNotNullObject(form.phone);
    
    flag = flag && validator.isNotNullObject(form.gender);
  
    flag = flag && validator.isNotNullObject(form.dob);
    console.log("validate form----------------------"+ flag)
    return flag;
    
  }




  submit() {
       var _self = this;
       console.log("inside submit signup---- " + _self.endpoint)
    _self.validate();
 
       this.httpService.post(this.endpoint, this.form.data,function (res) {

      console.log('MyResoonse', res);

      _self.form.message = '';
      _self.form.inputerror = {};

     
      if (res.success) {
        _self.form.error =false;
        _self.form.message = res.result.message;
      }

      if(!res.success){
        _self.form.error =true;
        _self.form.inputerror = res.result.inputerror;
        _self.form.message = res.result.message;
      }

      // _self.form.error = !res.success;
      // if (_self.form.error && res.result.inputerror) {
      //     _self.form.inputerror = res.result.inputerror;
      // }
    });
  }

  navigate(url){
    console.log("navigate====="+ this.form.data.id)
    console.log("get url ----- "+url)
  this.serviceLocator.forward(url);
  }
}
