import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { AdminComponent } from './admin-component/admin-component.component';
import { BuildingComponent } from './building/building.component';


//* for angular metirial imports

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
<<<<<<< Updated upstream:src/app/admin/admin.module.ts
import { FloorComponent } from './floor/floor.component';
=======

>>>>>>> Stashed changes:src/app/admin/admin-home/admin.module.ts
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { FloorComponent } from '../floor/floor.component';

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
        path:'floor',component:FloorComponent
      },
      {

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
      MatSelectModule,
      MatButtonModule,
      CommonModule,
      MatListModule

      ],

  declarations: [AdminComponent, FloorComponent],

})
export class AdminModule { }