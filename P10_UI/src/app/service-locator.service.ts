import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EndpointServiceService } from './endpoint-service.service';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocatorService {

  httpService = null;
  dataValidator = null;
  router = null;
  endpoints = null;



  constructor(private hs:HttpServiceService, private r:Router, private ep:EndpointServiceService) {

    this.httpService = hs;
    
    this.router = r;
    this.endpoints = ep;


   }
   ngOnInit() {
    console.log(")))))))-----" + this.endpoints)

  }


getPathVariable(route:ActivatedRoute,callback){
route.params.subscribe(param =>{
callback(param)
})
}



forward(page){
  console.log("++++++++++++++++++++++++++++++++++++++++++++++"+page)
  this.router.navigateByUrl(page);
}
}
