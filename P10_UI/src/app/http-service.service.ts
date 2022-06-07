import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private router:Router, private httpClient: HttpClient) {

   }

   get(endpoint, callback){ 
    if (this.isLogout()) {
      console.log('inside isLogout() return true');
      return true;
    }

    this.httpClient.get(endpoint).subscribe((data)=>{

      console.log("inside console------" +data);
      callback(data);
    })
  }

post(endpoint,bean,callback ){

  if (this.isLogout()) {
    console.log('inside isLogout() return true');
    return true;
  }

this.httpClient.post(endpoint,bean).subscribe((data)=>{
  
  console.log("inside post-----"+ data)
  callback(data);
})
}
isLogout() {
  let JSESSIONID = localStorage.getItem('jsessionId');
  console.log(JSESSIONID+'----JSESSIONID')
  if ((JSESSIONID == "null" || JSESSIONID === null)&& (this.router.url != "/login"
  && this.router.url != "/login"
  && this.router.url != "/logout" 
  && this.router.url != "/forgot-password" 
  && this.router.url != "/signup" 
  && this.router.url != "/login/true"
  )) {
this.router.navigateByUrl("/login/true");
return true;
} else {
return false;
} 
}

}
