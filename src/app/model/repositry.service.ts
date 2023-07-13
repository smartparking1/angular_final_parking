import { saveAs } from 'file-saver';
import { EventEmitter, Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
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
import { Slip, vehicle } from './vehilcle.model';
import { Observable } from 'rxjs';
import { Slots } from './slots.model';
import { Price } from './price.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class RepositryService implements OnInit {


  public isLogin: boolean = false;
  public currentUser: User = new User()
  public currentUserRole: string = ""
  public isRegister: boolean = false;
  public ListofBuildings: Building[] = []
  public adminLoginStatus: boolean = false
  public listOfFloors: Floor[] = []
  public listOfSlots: Slots[] = []
  public vehicle?: vehicle
  public employee?: User
  public allusers: vehicle[] = []
  public allEmployees: User[] = []
  public selectedSlot: Slots = new Slots()

  //exit
  public empId: number | undefined = 0;
  public vehicleDetails = new vehicle();
  public allVehicles: vehicle[] = [];
  public vehicleDet: vehicle | undefined = new vehicle();


  constructor(private restdata: RestDataService, private router: Router,private http:HttpClient) {
    this.restdata.getAllVehicles().subscribe(v => { this.allVehicles = v }),

      this.restdata.gettingFloors().subscribe((data) => {
        this.listOfFloors = data;
      }
      )

    this.restdata.gettingSlots().subscribe((data) => {
      this.listOfSlots = data;
    })

    this.restdata.getListOfBuildings().subscribe(
      (res) => {
        this.ListofBuildings = res
      })

  }


  ngOnInit(): void {


  }

  addfloor(floor: Floor) {

    this.restdata.addfloor(floor);
  }



  employeeLogin(user: Login) {
    this.restdata.employeeLogin(user).subscribe(
      (res) => {
        this.isLogin = true
        console.log("ok this is working")
        localStorage.setItem('token', res.jwt)
        this.empId = res.user.id;
        this.currentUser = res.user
        if (this.currentUser.role == 'admin') {

          this.router.navigateByUrl('admin/admin/home')
          this.adminLoginStatus = true

        } else if (this.currentUser.role == 'employee') {
          this.router.navigateByUrl('employee/employee/choosebuilding')
        }
        else {
          this.adminLoginStatus = false
        }
        console.log(res.user)
        this.currentUserRole = res.user.role
        localStorage.setItem('user', JSON.stringify(res.user))
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.detail,
          footer: 'please enter correct details'
        })
      }
    )
  }


  userRegister(user: User) {
    this.restdata.UserRegister(user).subscribe(
      (responce) => {
        this.isRegister = true
        this.isRegister = responce
      },
      (error) => {
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

  addBuilding(buildng: any) {
    this.restdata.addBuilding(buildng).subscribe(
      (respone) => {
        console.log(respone)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Building Added Successfully.',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/admin/admin/home')
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.detail,
          footer: 'please enter correct details'
        })
      }
    )
  }

  getListOfBuildings() {
    console.log(this.ListofBuildings)
    return this.ListofBuildings;
  }



chekingAdminLoginStatus() {
    const rolecheking = localStorage.getItem('user')
    if (rolecheking != null) {
      const role = JSON.parse(rolecheking).role
      if (role == 'admin') {
        return true
      }
      else {
        return false
      }
    }
    return false
  }


  addFloor(floor: any) {


 console.log(floor,'--------')

    return this.restdata.addFloor(floor).subscribe(
      (responce) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Floor Added Successfully.',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/admin/amdin/floor')
      console.log((responce))

    }, (error) => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.error,
        footer: 'please enter correct details'
      })
    })
  }

  gettingFloors() {

    return this.listOfFloors;

  }

  gettingSlots() {
    return this.listOfSlots;
  }

  saveParking(vehicle: vehicle) {
    this.restdata.saveParking(vehicle).subscribe((data: vehicle) => {
      this.vehicle = data;
      this.updateSlot(this.selectedSlot)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Slot alloceted successfully.',
        showConfirmButton: false,
        timer: 1500
      })
    },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Vehicle alredy in (please check the vehicle number)',
          footer: 'please enter correct details'
        })
      }
    );

  }

  updateSlot(selectedSlot: Slots) {
    this.restdata.updateSlot(selectedSlot).subscribe(data => {
      console.log(data)
    })
  }





  getallusers() {

    // this.restdata.getAllVehicles().subscribe(
    //   (respone)=>{
    //     this.allVehicles=respone
    //   },
    //   (error)=>{
    //     alert("Error"+ error);
    //   }
    // )

    return this.allVehicles
  }



  gettingallEmployees() {
    this.restdata.gettingallEmployees().subscribe(
      (responce) => {
        console.log(responce)
        this.allEmployees = responce
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'ALL Floors add alredy',
          footer: 'please enter correct details'
        })
      }
    )

    return this.allEmployees
  }



  // * fine page

  updateFineAmount(vehicle: vehicle) {
    this.restdata.updateFineAmount(vehicle).subscribe((data) => {
      console.log(data)
    })
  }



  //for exit
  getVehicleDetails(vehicleNum: any) {
    this.vehicleDet = this.allVehicles.find(v => v.vehicle_no == vehicleNum)
    const user = localStorage.getItem('user')
    if (user != null) {
      var userid = JSON.parse(user).id

    }
    if (userid != 0) {
      if (this.vehicleDet) {
        this.restdata.getVehicleDetails(vehicleNum, userid).subscribe(
          v => { Object.assign(this.vehicleDetails, v) },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: error.error.error,

            })
            this.router.navigateByUrl('/employee/employee/exitpoint')

          }

        );

        if (this.vehicleDetails != undefined) {
          this.router.navigateByUrl("employee/employee/vehicledetails")
        }
      }

      else {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '"sorry,no vehicle found with this number!!!!!"',

        })
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        text: "please login!!",

      }).then(res => {
        this.router.navigateByUrl("/login")
      })
    }
  }


  building = new Building();
  selectbuilding(build: Building) {
    this.building = build;
  }
  getbuilding() {
    console.log(" in repo ")
    console.log(this.building)
    return this.building
  }

  getSlip(){
    var vehicleNo:any=this.vehicleDetails.vehicle_no

    const pdfUrl = 'http://127.0.0.1:8000/pdf/';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers, responseType: 'blob' as 'json' };

    this.http.post(pdfUrl, { vehicle_no: vehicleNo }, options).subscribe((response: any) => {
      console.log(response)
      const fileURL = URL.createObjectURL(response);
      const link = document.createElement('a');
      link.href = fileURL;
      link.download = 'pay_slip.pdf';
      link.click();

      URL.revokeObjectURL(fileURL);
      link.remove();
    });
  }
  addPrice(price:Price) {
    this.restdata.addPrice(price).subscribe((data)=>{
     console.log(data)
     Swal.fire({
       icon: 'success',
       title: 'Price added successfully',
     })
    },(error)=>{
     console.log(error)
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text:error.error.error,
       footer: 'please enter correct details',
     })
   })
 }

 changeRole(email:string){
  this.restdata.changeRole(email).subscribe(
    (responce)=>{
      console.log(responce)
    },
    (error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text:error.error.detail,
        footer: 'please enter correct details',
      })

    }
  )
 }

 deleteEmployee(email:string){

  this.restdata.deleteEmployee(email).subscribe(
    (responce)=>{
      console.log(responce)
    },
    (error)=>{

    }
  )
 }
}
