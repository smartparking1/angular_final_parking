import { RepositryService } from 'src/app/model/repositry.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vehicle } from 'src/app/model/vehilcle.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {



  constructor(public repository:RepositryService , public router:Router, public dialog:MatDialog){}

  public vehicleDetails:vehicle=this.repository.vehicleDetails;

  openDialog() {
    this.dialog.open(PaymentComponent);

  }
}
