import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, ComponentArry } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { EmployeeHomepageComponent } from './employee/employee-homepage/employee-homepage.component';
import { EntryPointComponent } from './employee/entry-point/entry-point.component';
import { ExitpointComponent } from './employee/exitpoint/exitpoint.component';
import { FinepageComponent } from './employee/finepage/finepage.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentArry,
    DashbordComponent,
    EntryPointComponent,
    ExitpointComponent,
    FinepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
