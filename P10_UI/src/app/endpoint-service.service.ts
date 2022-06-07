import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointServiceService {

  constructor() { }


  public SERVER_URL = "http://localhost:8081";

  public ROLE = this.SERVER_URL + "/Role";

  public USER = this.SERVER_URL + "/User";

  public COLLEGE = this.SERVER_URL + "/College";

  public STUDENT = this.SERVER_URL + "/Student";

  public COURSE = this.SERVER_URL + "/Course";

  public SUBJECT = this.SERVER_URL + "/Subject";

  public FACULTY = this.SERVER_URL + "/Faculty";

  public TIMETABLE = this.SERVER_URL + "/TT";

  public MARKSHEET = this.SERVER_URL + "/Marksheet";

  public MESSAGE = this.SERVER_URL + "/Message";
  
}
