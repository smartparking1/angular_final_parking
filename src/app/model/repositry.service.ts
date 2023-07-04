import { Injectable } from '@angular/core';
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
import { vehicle } from './vehilcle.model';
@Injectable({
  providedIn: 'root'
})
export class RepositryService {

  public isLogin:boolean=false;
  public currentUser:User=new User()
  public currentUserRole:string=""
  public ListofBuildings:Building[]=[]
  public adminLoginStatus:boolean=false
  public listOfFloors:Floor[]=[]
  public vehicle?:vehicle

  constructor(private restdata:RestDataService,private router:Router) { }


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
    this.restdata.getListOfBuildings().subscribe(
      (res)=>{
        console.log(res)
      this.ListofBuildings=res
        console.log(this.ListofBuildings)
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
    return this.ListofBuildings

  }

  chekingAdminLoginStatus(){
    return this.adminLoginStatus
  }

  addFloor(floor:any){
    console.log()
    return this.restdata.addFloor(floor).subscribe(data => {
      // this.listOfFloors.push(data)
      console.log(data)
    })
  }

  saveParking(vehicle: vehicle) {
    this.restdata.saveParking(vehicle).subscribe((data: vehicle)=>{
        this.vehicle=data;
      });
  }

}
