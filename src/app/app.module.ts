// import { AgGridModule } from 'ag-grid-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, ComponentArry } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { EntryPointComponent } from './employee/entry-point/entry-point.component';
import { ExitpointComponent } from './employee/exitpoint/exitpoint.component';
import { FinepageComponent } from './employee/finepage/finepage.component';
import { BuildingComponent } from './admin/building/building.component';
import { TokenInterceptor } from './service/admin-inter.interceptor';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

import { FloorComponent } from './admin/floor/floor.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatInputModule} from '@angular/material/input';













@NgModule({
  declarations: [
    AppComponent,
    ComponentArry,
    DashbordComponent,
    EntryPointComponent,
    ExitpointComponent,
    FinepageComponent,
    BuildingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   BrowserAnimationsModule,
   MatFormFieldModule,
   MatSelectModule,
   MatBottomSheetModule,
   CommonModule,
   MatInputModule,
     MatIconModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
