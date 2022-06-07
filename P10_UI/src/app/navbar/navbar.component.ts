import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService,public route:Router, public locator:ServiceLocatorService) {
    
    translate.setDefaultLang(localStorage.getItem("locale"));
   }

   changeLocale(locale:string){
     console.log("locale value from navcom.ts : locale= "+locale);
    localStorage.setItem("locale",locale);
    this.translate.use(localStorage.getItem("locale"));
    this.ngOnInit();
     console.log(locale);
   }

sid
name
email
userid : string;
  ngOnInit() {
   this.sid= localStorage.getItem("jsessionId");
    this.name=localStorage.getItem("name");
    this.userid = localStorage.getItem("userid");
   this.email= localStorage.getItem("email");
    
  }

  checkLogin(){
    if(localStorage.getItem("jsessionId")==null || localStorage.getItem("jsessionId")==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    let logout:boolean=true;


    localStorage.removeItem('jsessionId');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('userid');
    this.route.navigateByUrl("/login");
  }
  loginId: string;
  
 

forward(){
  this.userid = localStorage.getItem("userid");
  console.log(this.userid+'UID<<<<<<<<<')
  
  this.locator.forward("/my-profile/"+this.userid);
 
}
}
