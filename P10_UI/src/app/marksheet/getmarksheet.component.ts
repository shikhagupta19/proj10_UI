import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-getmarksheet',
  templateUrl: './getmarksheet.component.html',
  styles: []
})
export class GetmarksheetComponent extends BaseCtl {

  // public form = {

  //   error: false, //error 
  //   message: null, //error or success message
  //   preload: [], // preload data
  //   data: { id: null,rollNo : null }, //form data
  //   inputerror: {}, // form input error messages
  //   searchParams: {}, //search form
  //   searchMessage: null, //search result message
  //   list: [], // search list 
  //   pageNo : 0
  // };
  
   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpservice :HttpServiceService) {
    super(locator.endpoints.MARKSHEET, locator, route);

  }




  populateForm(form, data) {
    form.id = data.id;
    form.rollNo = data.rollNo;
  
  }
  
  go(){
    var _self = this;
    console.log("onClickSubmit");
    console.log(this.form.data);
    console.log(this.form.data.rollNo);
    
    
    this.httpservice.get("http://localhost:8081/Marksheet/rollno/"+this.form.data.rollNo,function (res){
      
      if(res.success){
        
        _self.form.list = res.result.data;
        _self.form.error = false;
        if(_self.form.list.length == 0){
          _self.form.message = "No record found";
          _self.form.error = true;
        }
        console.log("List Size",_self.form.list.length );
      }else{
        if(!res.success){
          console.log("success false-----------------")

        _self.form.error = true;
        _self.form.message = res.result.message;
      }
    }
      console.log('FORM', _self.form);
    });
  }

}
