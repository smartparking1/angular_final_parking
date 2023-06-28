import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { RepositryService } from 'src/app/model/repositry.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formSubmitted: boolean = true;
  @ViewChild('form') form!: NgForm;
  roleError: boolean = false;
selectedrole?:string;
emailError: boolean = false;



  ngOnInit(): void {
  }
  constructor(private repo:RepositryService,private router:Router, private http:HttpClient ) { }
   newUser: User= new User();

  isValidForm() {
    console.log("checking valid form are not ")
    return this.newUser.employee_name && this.newUser.email_id &&
     this.newUser.password && this.newUser.cpassword &&
      this.newUser.mobile_number && this.newUser.role;
  }


  registerNewUser(){
    console.log( this.newUser)
    this.formSubmitted = true;

    console.log("entered into register")
      if (this.isValidForm()) {
        this.newUser.role=this.selectedrole

        console.log("valid form ")

        // this.http.post('http://localhost/register', this.newUser)
        // .subscribe(
        //   (response) => {
        //     console.log('Registration successful!', response);
        //     this.router.navigateByUrl('/login');


        //   },
        //   (error) => {
        //     console.error('Registration failed!', error);
        //   }
        // );


      }
      else{
        console.log("invalid form");
        if (!this.selectedrole) {
          this.roleError = true;
        }

      }

    if (this.form.valid && this.newUser.password === this.newUser.cpassword) {
      console.log("passwords matched");
    }
    else{
      console.log("passwords are not matched ")
    }





  }
}
