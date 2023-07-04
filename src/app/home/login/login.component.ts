import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/model/Register.model';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { RestDataService } from 'src/app/model/rest-data.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLogin:boolean=false;
  public currentUser:User=new User()
  public currentUserRole:string=""
  public ListofBuildings:Building[]=[]
  public adminLoginStatus:boolean=false
  constructor(private repo:RepositryService,private router:Router,private restdata:RestDataService) { }

  ngOnInit(): void {
  }
  login:Login=new Login("","")


  saveLogin(form:NgForm){
  //



    this.restdata.employeeLogin(this.login).subscribe(
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


   setTimeout(() => {
    const loginrole=localStorage.getItem('user')
    console.log(loginrole)
    console.log("++++++++++++")
    console.log(this.repo.currentUserRole)
    if(loginrole!=null){
      var role=JSON.parse(loginrole)
      console.log(role.role,"okkkkkkkkkkkkkkkkkk")
      this.router.navigateByUrl('/admin/home')

    }
    if(role=='admin'){
      console.log("okkkkkkkkkkkkkk")
      this.router.navigateByUrl('/admin/home')

      return
    }
    else if ((this.repo.currentUserRole=='employee')) {
      console.log(this.repo.currentUserRole,"............................")
      alert("ok this is the employee")

      this.router.navigateByUrl('/employee/employee/choosebuilding')

    }
  else{
    alert("this is the else part")
    console.log('not logged in');
    console.log(this.repo.currentUserRole)
  } }, 700);

}}
