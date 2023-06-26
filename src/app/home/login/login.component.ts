import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Register.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private repo:RepositryService,private router:Router) { }

  ngOnInit(): void {
  }
  login:Login=new Login("","")


  saveLogin(form:NgForm){
   const obj= this.repo.employeeLogin(this.login)
   setTimeout(() => {
    // const current_user=localStorage.getItem('user')
    if(this.repo.currentUserRole=='admin'){
      // const user=localStorage.getItem('user')
      // if (user!=null){
      //   console.log(user,"this is user we getting from back end and setting in the local storage")
      //   console.log(typeof(user),"fghjklkjhghjkljhj")
      // }
      this.router.navigateByUrl('/admin/home')
      return
    }
    else if ((this.repo.currentUserRole='employee')) {
      alert("ok this is the employee")

      this.router.navigateByUrl('/employee/employee/home')

    }
    else if (false) {
      // // this.repo.loginStatus = true;
      // this.repo.isloggedin()
      // this.router.navigateByUrl("/weekend");
    }
  }, 700);

}}
