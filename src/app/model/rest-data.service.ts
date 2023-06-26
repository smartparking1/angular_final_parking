import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './Register.model';
// import 'rxjs/add/oparator/catch';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestDataService {

  constructor(private http:HttpClient) { }


  employeeLogin(user:Login):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/Employee/EmployeeLogin/",user)
  }
}
