import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollegeListComponent } from './college/college-list.component';
import { CollegeComponent } from './college/college.component';
import { CourseListComponent } from './course/course-list.component';
import { CourseComponent } from './course/course.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { GetmarksheetComponent } from './marksheet/getmarksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { MarksheetMeritListComponent } from './marksheet/marksheet-merit-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { RoleListComponent } from './role/role-list.component';


import { RoleComponent } from './role/role.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentComponent } from './student/student.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TimeTableListComponent } from './time-table/time-table-list.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import {LoginComponent} from './login/login.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './login/signup.component';
import { MyProfileComponent } from './user/my-profile.component';
import { MessageComponent } from './message/message.component';
import { ForgotPasswordComponent } from './login/forgot-password.component';
import { ChangePasswordComponent } from './user/change-password.component';

const routes: Routes = [
{
  path:"role" , component : RoleComponent
},
{
  path:"rolelist" , component : RoleListComponent
},
{
  path: 'role/:id',
  component: RoleComponent
},
{
  path:'add-user',
  component : UserComponent
},
{
  path : 'user-list',
  component : UserListComponent
}
,
{
  path: 'add-user/:id',
  component: UserComponent
},
{
  path: 'add-college',
  component : CollegeComponent
},
{
  path: 'add-college/:id',
  component : CollegeComponent
},
{
  path : 'college-list',
  component : CollegeListComponent
},
{
  path:'add-student',
  component : StudentComponent
},
{
  path:'add-student/:id',
  component : StudentComponent
},
{
  path:'student-list',
  component : StudentListComponent
},
{
  path:'add-course',
  component : CourseComponent
},
{
  path:'add-course/:id',
  component : CourseComponent
},
{
  path:'course-list',
  component : CourseListComponent
},
{
  path:'add-subject',
  component : SubjectComponent
},
{
  path:'add-subject/:id',
  component : SubjectComponent
},
{
  path:'subject-list',
  component : SubjectListComponent
},
{
  path:'add-faculty',
  component : FacultyComponent
},
{
  path:'add-faculty/:id',
  component : FacultyComponent
},
{
  path:'faculty-list',
  component : FacultyListComponent
},

{
  path:'add-timetable',
  component : TimeTableComponent
},
{
  path:'add-timetable/:id',
  component : TimeTableComponent
},
{
  path:'timetable-list',
  component : TimeTableListComponent
},
{
  path:'add-marksheet',
  component : MarksheetComponent
},
{
  path:'add-marksheet/:id',
  component : MarksheetComponent
},
{
  path:'marksheet-list',
  component : MarksheetListComponent
},
{
  path:'get-marksheet',
  component : GetmarksheetComponent
},
{
  path:'marksheet-merit-list',
  component : MarksheetMeritListComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'login/:id',
  component: LoginComponent
},
{
  path: 'welcome',
  component: WelcomeComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{path:'',redirectTo:'welcome', pathMatch: 'full' },
{
  path: 'my-profile/:id',
  component: MyProfileComponent
},

{
  path: 'message',
  component: MessageComponent
},

{
  path: 'forgot-password',
  component: ForgotPasswordComponent
},
{
  path:'change-password',
  component : ChangePasswordComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
