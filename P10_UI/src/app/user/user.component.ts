import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseCtl {
  fileToUpload: File;

  constructor(public locator:ServiceLocatorService, public route:ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.USER, locator,route);
  }

  selected = null;

  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }


  populateForm(form,data){
    form.id=data.id;
    form.firstName=data.firstName;
    form.lastName=data.lastName;
    form.gender=data.gender;
    form.dob=data.dob;
    form.phone=data.phone;
    form.email=data.email;
    form.password=data.password;
    form.roleId=data.roleId;
    form.status=data.status;

  }

  submit() {
    var _self=this;
    console.log("----------@@@@@@@"+ this.api.save)
    console.log("id inside =======@@@@@@@@" + this.form.data.id)
    this.serviceLocator.httpService.post(this.api.save,this.form.data, function(res){
        _self.form.message='';
        _self.form.inputerror='';
        // console.log("input error--"+ _self.form.inputerror['name']);
        if(res.success){
            _self.form.error =false;
            _self.form.message="Record Saved SuccessFully!!!!!!!!!!!";
            

            console.log("------inside res.success submit-----------" + _self.form.error);
            
            console.log("=======++++" + _self.form.message)
            // _self.form.data;
            _self.uploadProfile(res.result.data);
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
              



            console.log("-----------------222" + _self.form.message);
          
            console.log("------inside !!res.success submit-----------" + _self.form.error);
            console.log("=====" + _self.form.inputerror['name'])
          }
        }
        //   _self.form.data.id= res.result.data;
          // console.log('FORM', _self.form);


    })
  }



  uploadProfile(id){

      const formData = new FormData();
      let phone = null;
      formData.append('file', this.fileToUpload);
      console.log(id+'this id number ======'+this.fileToUpload);
      this.httpClient.post("http://localhost:8081/User/profilePic/"+id, formData).subscribe((res)=>{
        console.log(res+"------resss=----")
      });
  }

  onFileSelect(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

  }



}
