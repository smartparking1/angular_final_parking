import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login} from 'src/app/model/Register.model';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { FormControl,Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';

import { RestDataService } from 'src/app/model/rest-data.service';
import Swal from 'sweetalert2'
import { get } from 'http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form!:FormGroup
submitted = false;


  constructor(private repo:RepositryService,private router:Router, private formBuilder:FormBuilder, private restdata: RestDataService) {

  }
  public isLogin:boolean=false;
  public currentUser:User=new User()
  public currentUserRole:string=""
  public ListofBuildings:Building[]=[]
  public adminLoginStatus:boolean=false



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^\S*$/)]]
    });
  }


  login:Login=new Login("","")


  saveLogin(){
   const obj= this.repo.employeeLogin(this.login)
   if (this.form.invalid) {
    return;
    }

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
          title: 'Invalid Crendentials',
          text: error.error.detail,
          footer: 'please enter correct details'
        })
      }
    )

  }
  get f()
  { return this.form.controls; }

}

