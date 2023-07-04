import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/model/Register.model';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
<<<<<<< Updated upstream
import { FormControl,Validators } from '@angular/forms';

=======
import { RestDataService } from 'src/app/model/rest-data.service';
import Swal from 'sweetalert2'
>>>>>>> Stashed changes
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< Updated upstream
form!:FormGroup
submitted = false;


  constructor(private repo:RepositryService,private router:Router, private formBuilder:FormBuilder) {

  }
=======
  public isLogin:boolean=false;
  public currentUser:User=new User()
  public currentUserRole:string=""
  public ListofBuildings:Building[]=[]
  public adminLoginStatus:boolean=false
  constructor(private repo:RepositryService,private router:Router,private restdata:RestDataService) { }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\S*$/)]]
    });
  }


  login:Login=new Login("","")


<<<<<<< Updated upstream
  saveLogin(){
   const obj= this.repo.employeeLogin(this.login)

   if (this.form.invalid) {
    return;
    }
=======
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


>>>>>>> Stashed changes
   setTimeout(() => {
<<<<<<< Updated upstream
    const loginrole=localStorage.getItem('user')
    console.log(loginrole)
    console.log("++++++++++++")
    console.log(this.repo.currentUserRole)
=======
   const loginrole=localStorage.getItem('user')
    console.log(loginrole)
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream

      else if ((this.repo.currentUserRole == 'employee')) {
        console.log(this.repo.currentUserRole)
        alert("ok this is the employee")

        this.router.navigateByUrl('/employee/employee/home')
=======
=======
>>>>>>> Stashed changes
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
>>>>>>> Stashed changes

      }
      else {
        alert("this is the else part")
        console.log('not logged in');
      }
    }, 7000}
get f()
{ return this.form.controls; }

}
