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
    if(this.repo.currentUserRole=='admin'){
      this.router.navigateByUrl('/admin/home')
      return
    }

    else if ((this.repo.currentUserRole='employee')) {
      console.log(this.repo.currentUserRole)
      alert("ok this is the employee")

      this.router.navigateByUrl('/employee/employee/home')

    }
  else{
    alert("this is the else part")
    console.log('not logged in');
  } }, 700);

}}
