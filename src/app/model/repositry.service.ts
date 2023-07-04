import { Injectable, OnInit } from '@angular/core';
import { Login } from './Register.model';
import { RestDataService } from './rest-data.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { error, log } from 'console';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { User } from './user.model';
import { Building } from './building.model';
import { Floor } from './floor.model';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class RepositryService implements OnInit {


  public isLogin:boolean=false;
  public currentUser:User=new User()
  public currentUserRole:string=""
  public ListofBuildings:Building[]=[]
  public adminLoginStatus:boolean=false

  constructor(private restdata:RestDataService,private router:Router) {

   }

  ngOnInit(): void {


  }


  addfloor(floor: Floor) {

    this.restdata.addfloor(floor);
}


  employeeLogin(user:Login){

    this.restdata.employeeLogin(user).subscribe(
      (res)=>{
        this.isLogin=true
        console.log("ok this is working")
        localStorage.setItem('token',res.jwt)

        console.log(res.user.role,'this is the role we are getting')
        this.currentUser=res.user
        if(this.currentUser.role=='admin'){
          this.adminLoginStatus=true

        }
        else{
          this.adminLoginStatus=false
        }
        console.log(res.user)

        this.currentUserRole=res.user.role
        localStorage.setItem('user',JSON.stringify(res.user))
      },
      (error)=>{
        // console.log(error);
        // alert(error.error.detail)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.detail,
          footer: 'please enter correct details'
        })
      }
    )
  }


  //* for adding building

  addBuilding(buildng:Building){

    this.restdata.addBuilding(buildng).subscribe(
      (res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/admin/admin/home')
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.detail,
          footer: 'please enter correct details'
        })
      }
    )
  }

  getListOfBuildings(){
    this.restdata.getListOfBuildings().subscribe((data)=>{
      console.warn("hello")
      this.ListofBuildings=data
      });
    console.warn(this.ListofBuildings+"inrfepo")
    return this.ListofBuildings
  }
  chekingAdminLoginStatus(){
    return this.adminLoginStatus
  }


}
