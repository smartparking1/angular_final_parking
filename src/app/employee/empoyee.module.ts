import { NgModule } from '@angular/core';



import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmplooyeeComponent } from './emplooyee/emplooyee.component';
import { CommonModule } from '@angular/common';


let routing=RouterModule.forChild([
  {
    path:"employee",
    component:EmployeeHomepageComponent,
    children:[
      {
        path:'home',component:EmployeeHomepageComponent
      },

      {
        path:'**', redirectTo:"home"
      }
    ],
  },
  {
    path:"**", redirectTo:"employee"
  }
])


@NgModule({

    imports: [routing,FormsModule ,ReactiveFormsModule],

    declarations: [
        EmplooyeeComponent

    ],


})
export class EmployeeModule { }
