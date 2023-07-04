import { EntryPointComponent } from './entry-point/entry-point.component';
import { NgModule } from '@angular/core';



import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmplooyeeComponent } from './emplooyee/emplooyee.component';
import { CommonModule } from '@angular/common';
import { ExitpointComponent } from './exitpoint/exitpoint.component';


let routing=RouterModule.forChild([
  {
    path:"employee",
    component:EmplooyeeComponent,
    children:[
      {
        path:'home',component:EmployeeHomepageComponent
      },
      {
        path:'entrypoint',component:EntryPointComponent

      },
      {
        path:'exitpoint', component:ExitpointComponent
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
