import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';



import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin-component/admin-component.component';


let routing=RouterModule.forChild([
  {
    path:"admin",
    component:AdminHomeComponent,
    children:[
      {
        path:'home',component:AdminHomeComponent
      },
      {
        path:'**', redirectTo:"home"
      }
    ],
  },
  {
    path:"**", redirectTo:"admin"
  }
])


@NgModule({

    imports: [ routing,FormsModule ,ReactiveFormsModule,CommonModule],

  declarations: [AdminComponent],

})
export class AdminModule { }
