import { EventEmitter, Injectable } from '@angular/core';
import {  OnInit } from '@angular/core';
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
import { Observable } from 'rxjs';
import { Slots } from './slots.model';

@Injectable({
  providedIn: 'root'
})


export class RepositryService implements OnInit {


  public isLogin:boolean=false;
  public currentUser:User=new User()
  public currentUserRole:string=""
  public isRegister:boolean=false;
  public ListofBuildings:Building[]=[]
  public adminLoginStatus:boolean=false
  public listOfFloors:Floor[]=[]
  public listOfSlots:Slots[] = []
  public vehicle?:vehicle
<<<<<<< Updated upstream
  public employee?:User
=======
  public allusers:vehicle[]=[]
>>>>>>> Stashed changes

  constructor( private restdata: RestDataService,private router:Router) {
      this.restdata.gettingFloors().subscribe((data) => {
          this.listOfFloors=data;
      })

      this.restdata.gettingSlots().subscribe((data)=>{
          this.listOfSlots = data;
      })

      this.restdata.getListOfBuildings().subscribe(
        (res)=>{
        this.ListofBuildings=res
        })

   }
  constructor(private restdata:RestDataService,private router:Router) {

   }

  ngOnInit(): void {


  }


  addfloor(floor: Floor) {

    this.restdata.addfloor(floor);
}


  employeeLogin(user:Login){
    console.warn("//pppppppppppppppppppppppppppppppp")

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


userRegister(user:User){
  this.restdata.UserRegister(user).subscribe(
    (res)=>{
      this.isRegister=true
      this.isRegister=res
    },
    (error)=>{
      console.log(error);
      alert(error.error.detail)
      Swal.fire({
        icon: 'error',
        title: 'Registering Failed...',
        text: error.error.detail,
        footer: 'failed registering'
      })
    }

  )

}



  //* for adding building

  addBuilding(buildng:Building){

    this.restdata.addBuilding(buildng).subscribe(
      (res)=>{
        console.log(res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Building Added Successfully.',
          showConfirmButton: false,
          timer: 1500
        })
        EventEmitter
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
    console.log(this.ListofBuildings)
    return this.ListofBuildings;
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
    this.restdata.getListOfBuildings().subscribe((data)=>{
      console.warn("hello")
      this.ListofBuildings=data
      });
    console.warn(this.ListofBuildings+"inrfepo")
    return this.ListofBuildings
  }

  chekingAdminLoginStatus(){
    this.adminLoginStatus
    // console.log(this.isLogin,"==================")
    const rolecheking=localStorage.getItem('user')
    if(rolecheking!=null){
    const role=JSON.parse(rolecheking).role
    if(role=='admin'){
      return true
    }
    else{
      return false
    }
    }
    return false
  }

  addFloor(floor:any){
    console.log()
    return this.restdata.addFloor(floor).subscribe(data => {
      // this.listOfFloors.push(data)
      console.log(data)
    },(error)=>{

      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:'ALL Floors add alredy' ,
        footer: 'please enter correct details'
      })
    })
  }

  gettingFloors() {

      return  this.listOfFloors;

  }

  gettingSlots() {
      return this.listOfSlots;
  }

  saveParking(vehicle: vehicle) {

    this.restdata.saveParking(vehicle).subscribe((data: vehicle)=>{
        this.vehicle=data;
      });

  }

  updateSlot(selectedSlot:Slots) {
    this.restdata.updateSlot(selectedSlot).subscribe(data =>{
      console.log(data)
    })
   }





  getallusers(){
    this.restdata.getallusers().subscribe(
      (responce:any)=>{
        this.allusers=responce
      }
    )
    return this.allusers
  }

  

gettingallEmployees(){
    this.restdata.gettingallEmployees().subscribe(
      (responce)=>{
        console.log(responce)
        return responce
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text:'ALL Floors add alredy' ,
          footer: 'please enter correct details'
        })

      }
    )
  }
}
