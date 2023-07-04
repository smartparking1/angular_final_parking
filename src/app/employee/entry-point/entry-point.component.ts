import { Component, OnInit} from '@angular/core';


import Swal from 'sweetalert2';
import { RepositryService } from 'src/app/model/repositry.service';
import { vehicle } from 'src/app/model/vehilcle.model';
import { Slots } from 'src/app/model/slots.model';
import { Floor } from 'src/app/model/floor.model';




@Component({
  selector: 'app-check-in-time',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css']
})
export class EntryPointComponent implements OnInit{

  parkingDetails?:vehicle
  selectedFloor?:any;
  selectedSlot: any;
  isMarked?: boolean=false;
  carNumber?: string;
  slotsarry: Slots[]=[]

  public floors:any;
  public vehicleType:string="";
 slotarry: Slots[] =[
  { slot_id: 1, slot_name: "Slot A", status: "Active", floor_id: 2},
    { slot_id: 2, slot_name: "Slot B", status: "Inactive", floor_id: 2 },
    { slot_id: 3, slot_name: "Slot C", status: "Active", floor_id: 2 },
    { slot_id: 4, slot_name: "Slot D", status: "Inactive", floor_id: 2 },
    { slot_id: 5, slot_name: "Slot E", status: "Active", floor_id: 2 },
    { slot_id: 6, slot_name: "Slot F", status: "Inactive", floor_id: 2 },
    { slot_id: 7, slot_name: "Slot G", status: "Active", floor_id: 2 },
    { slot_id: 8, slot_name: "Slot H", status: "Inactive", floor_id: 2 },
    { slot_id: 9, slot_name: "Slot I", status: "Active", floor_id: 2 },
    { slot_id: 10, slot_name: "Slot J", status: "Inactive", floor_id: 2 },
    { slot_id: 1, slot_name: "Slot A", status: "Inactive", floor_id: 1},
    { slot_id: 2, slot_name: "Slot B", status: "Inactive", floor_id: 1 },
    { slot_id: 3, slot_name: "Slot C", status: "Inactive", floor_id: 1 },
    { slot_id: 4, slot_name: "Slot D", status: "Inactive", floor_id: 1 },
    { slot_id: 5, slot_name: "Slot E", status: "Active", floor_id: 1 },
    { slot_id: 6, slot_name: "Slot F", status: "Active", floor_id: 1 },
    { slot_id: 7, slot_name: "Slot G", status: "Active", floor_id: 1 },
    { slot_id: 8, slot_name: "Slot H", status: "Active", floor_id: 1 },
    { slot_id: 9, slot_name: "Slot I", status: "Active", floor_id: 1 },
    { slot_id: 10, slot_name: "Slot J", status: "Active", floor_id: 1 }
]


Floors: Floor[] = []
  constructor(private checkInService:RepositryService) {

   }

  onFloorSelectionChange(selectedFloor: any) {
   this.slotsarry=this.slotarry.filter(data =>data.floor_id==selectedFloor.floor_id)
  }

  ngOnInit(): void {

  }

 // Change the type to match your slot object type
  selectSlot(slot: any) {
    if(slot.status=='Inactive')
    {
      Swal.fire(" Parking slot is already occupied !","Select Another Slot\u{1F60A}","error");
      slot=null
    }
    if (this.selectedSlot === slot) {
      this.selectedSlot = null; // Deselect the slot
    } else {
      this.selectedSlot = slot; // Select the slot
    }

  }
// Change the type to match your slot object type
  isMarkedd(slot: any) {
    return this.selectedSlot === slot;
  }
//method for parkingsaving
  save(){
    this.parkingDetails={}
const currentDate = new Date();
const formattedDate = currentDate.toLocaleTimeString() // Convert to time string format
//  this.parkingDetails.checkIn_time=currentDate
 this.parkingDetails!.vehicle_no=this.carNumber;
 this.parkingDetails!.slot=this.selectedSlot.slot_id;
 this.parkingDetails.vehicle_type=this.vehicleType;
  this.checkInService.saveParking(this.parkingDetails);
  }

}
