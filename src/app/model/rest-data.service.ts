import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Register.model';
// import 'rxjs/add/oparator/catch';
import { Observable, throwError } from 'rxjs';
import { Building } from './building.model';
import { NgForm } from '@angular/forms';
import { Floor } from './floor.model';
import { vehicle } from './vehilcle.model';
import { User } from './user.model';
import { Slots } from './slots.model';


import { Form } from '@angular/forms';
import { Price } from './price.model';
import { emit } from 'process';
@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class RestDataService {


  constructor(private http:HttpClient) { }

  // public status:string = 'inactive'
  buildings:Building[] = []

  employeeLogin(user:Login):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/Employee/EmployeeLogin/",user)
  }



  //* for admin  section oparations

  addBuilding(building:any):Observable<Building>{
    return this.http.post<Building>("http://127.0.0.1:8000/building/addingbuilding/",building)
  }

  UserRegister(user: User ): Observable<any> {

    return this.http.post<any>("http://127.0.0.1:8000/Employee/EmployeeRegister/", user);
  }

  // userRegister(user: User): Observable<any> {
  //   const registrationUrl = 'http://127.0.0.1:8000/Employee/EmployeeRegister/';
  //   return this.restdata.serRegister(user, registrationUrl);
  // }


  getListOfBuildings():Observable<Building[]>{

    return this.http.get<Building[]>("http://127.0.0.1:8000/building/GettingAllBuildings/")

  }

  addFloor(floor:Floor):Observable<Floor>{
    return this.http.post<Floor>("http://127.0.0.1:8000/building/addingFloorAndGetAllFloors/",floor)
  }

  gettingFloors():Observable<Floor[]>{
    return this.http.get<Floor[]>("http://127.0.0.1:8000/building/addingFloorAndGetAllFloors/")
  }

  gettingSlots():Observable<Slots[]>{
    return this.http.get<Slots[]>("http://127.0.0.1:8000/building/gettingallslots/")
  }



  saveParking(vehicle: vehicle):Observable<vehicle>{
    return this.http.post<vehicle>("http://127.0.0.1:8000/vehicleparking/insertvehicleparking/",vehicle);
  }

  updateSlot(selectedSlot: any):Observable<Slots> {
    let id=selectedSlot.slot_id
    console.log(id)
    console.log(selectedSlot)
    if(selectedSlot.status == 'active') {
      selectedSlot.status = 'inactive'
    } else {
      selectedSlot.status = 'active'
    }
    console.log(selectedSlot)
    return this.http.put<Slots>(`http://127.0.0.1:8000/building/SlotUpdate/${id}/${selectedSlot.status}/`,"null")
  }

  addfloor(floor:Floor):Observable<Floor>{

      return  this.http.post<Floor>('http://127.0.0.1:8000/building/addingFloorAndGetAllFloors/',floor)
  }
  // getallusers():Observable<vehicle[]>{
  //   return this.http.get<vehicle[]>('http://127.0.0.1:8000/vehicleparking/getallvehicleparking/')
  // }

  gettingallEmployees():Observable<User[]>{
    return this.http.get<User[]>('http://127.0.0.1:8000/Employee/GettingAllEmployeeList/')
  }

  updateFineAmount(vehicle:vehicle):Observable<vehicle>{
    return this.http.put<vehicle>('http://127.0.0.1:8000/vehicleparking/updatefineamount/',vehicle)
  }

  getVehicleDetails(vehicle_no:string, empId:number|undefined):Observable<vehicle>
   {
     return this.http.put<vehicle>(`http://127.0.0.1:8000/vehicleparking/updatevehicleparking/${empId}/${vehicle_no}/`,null);
   }

   getAllVehicles():Observable<vehicle[]>
   {
     return this.http.get<vehicle[]>(`http://127.0.0.1:8000/vehicleparking/getallvehicleparking/`);
   }
   getSlip(vehicle_no:any):Observable<any>{


    return this.http.post<any>('http://127.0.0.1:8000/pdf/',vehicle_no)

   }
   addPrice(price:Price):Observable<Price>{
    console.log(price)
    return this.http.post<Price>('http://127.0.0.1:8000/vehicleparking/PriceInsert/',price)
   }
   changeRole(email:string):Observable<any>{
    var data={
     email:email
    }
    return this.http.post<any>('http://127.0.0.1:8000/Employee/EmployeeRoleUpadate/',data)
   }
   deleteEmployee(email:string):Observable<any>{
    return this.http.delete<any>('http://127.0.0.1:8000/Employee/DeletingEmployees/8/')
   }
}
