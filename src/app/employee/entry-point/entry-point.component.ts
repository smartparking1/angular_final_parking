import { Component, OnInit} from '@angular/core';


import Swal from 'sweetalert2';
import { RepositryService } from 'src/app/model/repositry.service';
import { vehicle } from 'src/app/model/vehilcle.model';
import { Slots } from 'src/app/model/slots.model';
import { Floor } from 'src/app/model/floor.model';
import { Building } from 'src/app/model/building.model';
import { RestDataService } from 'src/app/model/rest-data.service';




@Component({
  selector: 'app-check-in-time',
  templateUrl: './entry-point.component.html',
  styleUrls: ['./entry-point.component.css']
})
export class EntryPointComponent implements OnInit{

  selectedBuilding?:Building
  parkingDetails?:vehicle
  selectedFloor?:any;
  selectedSlot: any;
  isMarked?: boolean=false;
  carNumber?: string;
  slotsarry: Slots[]=[]
  buildings:Building[]=[]
  floors: Floor[] = [];
  filterFloors : Floor[] = [];
  slotarry: Slots[] =[]
  filterSlot : Slots[] = []
  parking_amount?:number

  public vehicleType:string="";




  constructor(private repo:RepositryService) {

   }

   ngOnInit(): void {
    this.buildings=this.repo.getListOfBuildings();

  }

  onBuildingSelection(selectedBuilding:any) {
    this.gettingFloors();
    this.filterFloors = [];
    this.filterFloors = this.floors.filter((data)=> data.building == this.selectedBuilding?.building_id)
  }

  onFloorSelectionChange(selectedFloor: any) {
    console.log(this.selectedFloor)
    this.gettingSlots();
    this.filterSlot = []
    this.filterSlot = this.slotarry.filter(data =>data.floor == this.selectedFloor?.floor_id)

  }

 // Change the type to match your slot object type
  selectSlot(slot: any) {
    if(slot.status=='inactive')
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
    let id = localStorage.getItem('user')
    var id_of_employee;
   if(id!=null){
     id_of_employee= JSON.parse(id).id
   }
    this.parkingDetails={}
const currentDate = new Date();
const formattedDate = currentDate.toLocaleTimeString() // Convert to time string format
//  this.parkingDetails.checkIn_time=currentDate
 this.parkingDetails!.vehicle_no=this.carNumber;
 this.parkingDetails!.slot=this.selectedSlot.slot_id;
 this.parkingDetails.vehicle_type=this.vehicleType;
 this.parkingDetails.parking_amount = this.parking_amount;
 this.parkingDetails.fine_amount = 0;
 this.parkingDetails.slot = this.selectedSlot.slot_id;
 this.parkingDetails.checkin_by = id_of_employee;
  this.repo.saveParking(this.parkingDetails);
  // this.selectedSlot.status="inactive";
  // this.repo.updateSlot(this.selectedSlot)
  }

  updateSlot(selectedSlot:Slots){
    console.log(selectedSlot)
    this.repo.updateSlot(selectedSlot)
  }

  getbuildings(){
    return this.buildings;
  }

  gettingFloors() {
    this.floors = this.repo.gettingFloors();
    // this.filterFloor = this.floors.filter((data)=> data.building == this.selectedBuilding?.building_id)
  }

  gettingSlots() {
    this.slotarry = this.repo.gettingSlots();
  }

}
