import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Register.model';
// import 'rxjs/add/oparator/catch';
import { Observable, throwError } from 'rxjs';
import { Building } from './building.model';
@Injectable({
  providedIn: 'root'
})
export class RestDataService {

  constructor(private http:HttpClient) { }


  employeeLogin(user:Login):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/Employee/EmployeeLogin/",user)
  }



  //* for admin  section oparations

  addBuilding(building:Building):Observable<Building>{
    return this.http.post<Building>("http://127.0.0.1:8000/building/addingbuilding/",building)
  }

  getListOfBuildings():Observable<Building[]>{
    return this.http.get<Building[]>("http://127.0.0.1:8000/building/GettingAllBuildings/")
  }
}
