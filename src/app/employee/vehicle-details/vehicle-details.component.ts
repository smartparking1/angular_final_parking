import { RepositryService } from 'src/app/model/repositry.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vehicle } from 'src/app/model/vehilcle.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { PaymentComponent } from '../payment/payment.component';
import { Slots } from 'src/app/model/slots.model';


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {



  constructor(public repository:RepositryService , public router:Router, public dialog:MatDialog){}

  public vehicleDetails:vehicle=this.repository.vehicleDetails;
  listOfSlots:Slots[]=[];
  slot:Slots= new Slots()
  openDialog() {
    this.dialog.open(PaymentComponent);

  }
  updateSlot(slot_id:any) {
    console.log(slot_id , " ================")
    this.listOfSlots  =  this.repository.gettingSlots()
    // this.listOfSlots.forEach((data) => {
    //   if(data.slot_id == slot_id) {
    //     this.slot = data;
    //   }
    // })
    var obj=this.listOfSlots.find(e=>e.slot_id==slot_id)
    if(obj !=undefined){
      this.slot= obj
    }
    this.repository.updateSlot(this.slot)
  }
}
