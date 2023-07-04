import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Register.model';
// import 'rxjs/add/oparator/catch';
import { Observable, throwError } from 'rxjs';
import { Building } from './building.model';
<<<<<<< Updated upstream
import { NgForm } from '@angular/forms';
import { Floor } from './floor.model';
import { vehicle } from './vehilcle.model';
import { User } from './user.model';


=======
import { Floor } from './floor.model';
import { Form } from '@angular/forms';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class RestDataService {

  constructor(private http:HttpClient) { }

  buildings:Building[] = []

  employeeLogin(user:Login):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/Employee/EmployeeLogin/",user)
  }



  //* for admin  section oparations

  addBuilding(building:Building):Observable<Building>{
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

  saveParking(vehicle: vehicle):Observable<vehicle>{
    return this.http.post<vehicle>("http://127.0.0.1:8000/Employee/EmployeeLogin/",vehicle);
  }

  addfloor(floor:Floor):Observable<Floor>{

      return  this.http.post<Floor>('http://127.0.0.1:8000/building/addingFloorAndGetAllFloors/',floor)
  }
}
