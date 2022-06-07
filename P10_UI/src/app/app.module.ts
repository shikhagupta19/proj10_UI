import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { RoleListComponent } from './role/role-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TimeTableListComponent } from './time-table/time-table-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './login/signup.component';
import { MyProfileComponent } from './user/my-profile.component';
import { MessageComponent } from './message/message.component';
import { ForgotPasswordComponent } from './login/forgot-password.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChangePasswordComponent } from './user/change-password.component';


export function myHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavbarComponent,
    RoleListComponent,
    UserComponent,
    UserListComponent,
    CollegeComponent,
    CollegeListComponent,
    StudentComponent,
    StudentListComponent,
    CourseComponent,
    CourseListComponent,
    SubjectComponent,
    SubjectListComponent,
    FacultyComponent,
    FacultyListComponent,
    TimeTableComponent,
    TimeTableListComponent,
    MarksheetComponent,
    MarksheetListComponent,
    GetmarksheetComponent,
    MarksheetMeritListComponent,
    LoginComponent,
    WelcomeComponent,
    SignupComponent,
    MyProfileComponent,
    MessageComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
   
    

    
  
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: myHttpLoader, 
          deps: [HttpClient]
      }
    }),
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
