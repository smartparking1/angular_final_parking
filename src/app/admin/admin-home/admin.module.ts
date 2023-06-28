import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

import { AdminComponent } from '../admin-component/admin-component.component';
import { BuildingComponent } from '../building/building.component';


//* for angular metirial imports

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


let routing=RouterModule.forChild([
  {
    path:"admin",
    component:AdminComponent,
    children:[
      {
        path:'home',component:AdminHomeComponent
      },
      {
        path:'addbuilding',component:BuildingComponent
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

    imports: [
      FormsModule, ReactiveFormsModule,
      routing,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      // BrowserAnimationsModule,
      MatSelectModule,
      MatButtonModule,
      // NoopAnimationsModule,

      ],

  declarations: [AdminComponent],

})
export class AdminModule { }
