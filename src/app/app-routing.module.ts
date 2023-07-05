import { EmployeeModule } from './employee/empoyee.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EmplooyeeComponent } from './employee/emplooyee/emplooyee.component';
import { EmployeeHomepageComponent } from './employee/employee-homepage/employee-homepage.component';

import { UserdetailsComponent } from './home/userdetails/userdetails.component';
import { ChoosebuildingComponent } from './employee/choosebuilding/choosebuilding.component';
import { FloorComponent } from './admin/floor/floor.component';

import { BuildingComponent } from './admin/building/building.component';


const routes: Routes = [
  {
    path:"app-root",
    component:AppComponent
  },
  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"login",
    component:LoginComponent
  },
{
  path:"register",
  component:RegisterComponent
},
{
  path:"userdetails",
  component:UserdetailsComponent
},
{
  path:"admin",
  loadChildren:()=> import('./admin/admin.module').then(a=>a.AdminModule)
},
{
  path:"choosebuilding",
  component:ChoosebuildingComponent
},
{
  path:'employee',
  loadChildren:()=>import('./employee/empoyee.module').then(a =>a.EmployeeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ComponentArry=[AppComponent,LoginComponent,HomeComponent,RegisterComponent,AdminHomeComponent,EmployeeHomepageComponent,UserdetailsComponent,BuildingComponent]
