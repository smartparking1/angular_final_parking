import { EntryPointComponent } from './entry-point/entry-point.component';
import { NgModule } from '@angular/core';



import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmplooyeeComponent } from './emplooyee/emplooyee.component';
import { CommonModule } from '@angular/common';
import { ExitpointComponent } from './exitpoint/exitpoint.component';
import { ChoosebuildingComponent } from './choosebuilding/choosebuilding.component';
import { MatCardModule } from '@angular/material/card';
import { FinepageComponent } from './finepage/finepage.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PaymentComponent, PaymentModeDialog } from './payment/payment.component';



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
        path:'choosebuilding', component:ChoosebuildingComponent
      },
      {
        path:'finepoint', component:FinepageComponent
      },
      {
        path:'vehicledetails', component:VehicleDetailsComponent
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

    imports: [routing,FormsModule ,ReactiveFormsModule,MatCardModule,CommonModule],

    declarations: [
        EmplooyeeComponent,
        ChoosebuildingComponent,
        VehicleDetailsComponent,
        PaymentComponent,
        PaymentModeDialog

    ],


})
export class EmployeeModule { }
