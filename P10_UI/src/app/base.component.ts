import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServiceLocatorService } from "./service-locator.service";




export class BaseCtl implements OnInit {
   
    public api = {
        endpoint: null,
        get: null,
        save: null,
        search: null,
        delete: null,
        preload: null
      }
   
   initApi(ep){

    this.api.endpoint=ep;
    this.api.get=ep + "/get";
    this.api.save=ep + "/save";
    this.api.search=ep + "/search";
    this.api.delete=ep + "/delete";
    this.api.preload=ep + "/preload";
    
    console.log("API-----", this.api)


   }

   
/**
   * Form contains preload data, error/sucess message 
   */
 public form = {

    error: false, //error 
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null, rollNo : null }, //form data
    inputerror:  {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
    pageNo : 0,
    pageSize:10,
    delete:true// for delete msg
  };

  public size:any=null;

   constructor(public endpoint, public serviceLocator:ServiceLocatorService, public route:ActivatedRoute){
   
    
    var _self=this;
    _self.initApi(endpoint);

console.log("====="+ _self.form.data.id)
    serviceLocator.getPathVariable(route,function(params){

      // console.log("@@@@@-------------------------"+ this.form.data.id)
      _self.form.data.id=params["id"];
        console.log("I Got Id", _self.form.data.id);
    })

   }
   
  
    ngOnInit(){
        // throw new Error("Method not implemented.");
        this.preload();
        console.log("OnInit inside Base Component-----------"+this.form.data.id)
        if (this.form.data && this.form.data.id > 0) {
            this.display();
          }
    }

preload(){
  let _self=this;
  this.serviceLocator.httpService.get(_self.api.preload, function(res){
console.log("inside preload basectl----------"+ _self.api.preload)
    if(res.success){
      _self.form.preload=res.result;
      console.log("preload -----------" +_self.form.preload);
    }
  })
}





/**
   * Contains display logic. It fetches data from database for the primary key 
   */
 display() {
console.log("inside display basectl-------------------")
    var _self = this;

    this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
      if (res.success) {
        _self.populateForm(_self.form.data, res.result.data);
      } else {
        _self.form.error = true;
        _self.form.message = res.result.message;
      }
      console.log('FORM', _self.form);
    });
  }

  /**
   * Populate HTML form data
   * Overridden by child classes.
   * 
   * @param form 
   * @param data 
   */
  populateForm(form, data) {
    form.id = data.id;
    console.log(form.id+'formid in base ctl');
  }



    reset(){
        var _self=this;
        _self.form.data={id:null, rollNo:null};
        _self.form.inputerror='';
        _self.form.message='';
    }

    submit(){
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

    
search(){
let _self=this
_self.preload();
console.log("-=-=-=-=-=--"+ _self.form.searchParams)
this.serviceLocator.httpService.post(this.api.search+"/"+_self.form.pageNo,_self.form.searchParams,function(res){
//  console.log("api---" +this.api.search+"/"+_self.form.pageNo )
console.log("inside search data-------------")
   
if(res.success){
      _self.form.error=false;
        _self.form.list=res.result.data;
        console.log("list when click any List-----"+ _self.form.list)
         _self.size=_self.form.list.length;
         _self.form.pageSize=_self.size;
        console.log("list size inside search-------------" + _self.size);

    }
    else{
        if(!res.success){
         
            _self.form.error=true;
            _self.form.message=res.result.data;
            console.log("@@@@@@" + _self.form.message)
        }
    }
});

}

// getAll(){
//   let _self=this
//   _self.preload();
//   console.log("-=-=-=-=-=--"+ _self.form.searchParams)
//   this.serviceLocator.httpService.post(this.api.search+"/"+_self.form.pageNo,_self.form.searchParams,function(res){
//   //  console.log("api---" +this.api.search+"/"+_self.form.pageNo )
//   console.log("inside search data-------------")
     
//   if(res.success){
//         _self.form.error=false;
//           _self.form.list=res.result.data;
//            _self.size=_self.form.list.length;
//            _self.form.pageSize=_self.size;
//           console.log("list size inside search-------------" + _self.size);
  
//       }
//       else{
//           if(!res.success){
           
//               _self.form.error=true;
//               _self.form.message=res.result.data;
//               console.log("@@@@@@" + _self.form.message)
//           }
//       }
//   });
  
//   }



delete(id,callback?){
let _self=this;
console.log("delete id-- "+id);
console.log("pageNo inside delete------ " +_self.form.pageNo)

this.serviceLocator.httpService.get(_self.api.delete+"/"+id, function(res){

  if(res.success){
    if(_self.size==1){
      _self.form.pageNo=0;
    }
    _self.form.delete=false;
    _self.form.message=res.result.message;
    console.log(_self.form.message);
    _self.showAlert();
   _self.search();
   console.log("list size in delete-----" + _self.size);
    // if(callback){
    //   console.log('callingcallback');
    //   callback();
    // }
  }
  
  
  //   else{
  //   _self.form.error=true;
  //   _self.form.message=res.result.message;
  //   console.log("---------"+ _self.form.message)
  // }

})
}

public isVisible: boolean = false;

  showAlert() : void {
    if (this.isVisible) { // if the alert is visible return
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2000); // hide the alert after 2.5s
  }

navigate(url){
    // this.inputerror.error=false
    console.log("navigate====="+ this.form.data.id)
    console.log("get url ----- "+url)
  this.serviceLocator.forward(url);
  
  }
}