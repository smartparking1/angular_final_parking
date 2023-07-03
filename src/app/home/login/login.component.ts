import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Register.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form!:FormGroup
submitted = false;

  constructor(private repo:RepositryService,private router:Router, private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^\S*$/)]]
    });
  }


  login:Login=new Login("","")


  saveLogin(){
   const obj= this.repo.employeeLogin(this.login)

   if (this.form.invalid) {
    return;
    }
   setTimeout(() => {
    if(this.repo.currentUserRole=='admin'){
      this.router.navigateByUrl('/admin/home')
      return
    }
    else if ((this.repo.currentUserRole='employee')) {
      alert("ok this is the employee")

      this.router.navigateByUrl('/employee/employee/home')

    } }, 700);

}
get f()
{ return this.form.controls; }



}
