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

import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
   MatToolbarModule,
   MatIconModule,

   MatSidenavModule,
   MatSelectModule,
   MatButtonModule,
   MatCardModule,
   FormsModule,
     MatTableModule,
     MatDialogModule,
     MatSlideToggleModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,


  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
