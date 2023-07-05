// import { Swal } from 'sweetalert2';
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
  formSubmitted: boolean = false;
  @ViewChild('form') form!: NgForm;
  roleError: boolean = false;
selectedrole?:string;
emailError: boolean = false;
cpassword?:string;



  ngOnInit(): void {
    this.newUser.location="banglore";
  }
  constructor(private repo:RepositryService,private router:Router, private http:HttpClient, private repositoryService:RepositryService ) { }
   newUser: User= new User();

  isValidForm() {
    console.log("checking valid form are not ")
    return this.newUser.employee_name && this.newUser.email_id &&
     this.newUser.password &&
     this.cpassword &&
      this.newUser.mobile_number && this.newUser.role && this.newUser.location;
  }


  registerNewUser() {
    console.log(this.newUser);
    this.formSubmitted = true;

    console.log("entered into register");
    if (this.isValidForm()) {



          this.repo.userRegister(this.newUser)
           this.router.navigateByUrl('/login')
            console.log("register successfully ")
        }


    


    

    else {
        console.log("invalid form");
        if (!this.selectedrole) {
          this.roleError = true;
        }

      if (this.form.valid && this.newUser.password === this.cpassword) {
        console.log("passwords matched");
      } else {
        console.log("passwords do not match");
      }
    // }
  }
  }
}
