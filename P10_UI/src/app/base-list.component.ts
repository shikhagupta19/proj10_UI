import { ActivatedRoute } from "@angular/router";
import { BaseCtl } from "./base.component";
import { EndpointServiceService } from "./endpoint-service.service";
import { ServiceLocatorService } from "./service-locator.service";

export class BaseListCtl extends BaseCtl {

constructor(public endpoint:EndpointServiceService, public locator:ServiceLocatorService, public route:ActivatedRoute){
    super(endpoint,locator,route);
}
ngOnInit(){
    this.search();
}
reset(){
 this.reload();
}
display() {
 console.log("call search inside display===========")
    this.search();
  }
  flag=false;
  
confirm(id){
    let _self=this

    _self.flag= confirm("are u sure");
    if(_self.flag){
      _self.flag=true;
      this.delete(id);
      console.log("delete ------------ call");

    }
    else{
      _self.flag=false;
      console.log("not delete ------------ ");

    }
  }

  next() {

    let _self=this;
    _self.form.searchParams={}
    _self.form.delete=false;
    _self.form.data={id:null, rollNo:null}
    console.log("In next...")
    this.form.pageNo++;
    this.display();
  }

  previous() {
    let _self=this;
    // _self.form.delete=false;
    _self.form.searchParams={}
    if (this.form.pageNo > 0) {
      console.log("In previous...")
      this.form.pageNo--
      this.display();
    }
    else{
      console.log("In previous if pafe size==0...")
    }
  }

  reload(){
    window.location.reload();
    }









   
}
