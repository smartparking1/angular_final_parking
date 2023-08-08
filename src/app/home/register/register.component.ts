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
selectedFile: File | undefined;
imageUrl: string = ''

  ngOnInit(): void {
    this.newUser.location="";
  }
  constructor(private repo:RepositryService,private router:Router, private http:HttpClient, private repositoryService:RepositryService ) { }
   newUser: User= new User();

  isValidForm() {
    console.log("checking valid form are not ")
    return this.newUser.employee_name && this.newUser.email_id &&
     this.newUser.password &&
     this.cpassword &&
      this.newUser.mobile_number && this.newUser.location;
  }


  registerNewUser() {
    console.log(this.newUser);
    this.formSubmitted = true;

    console.log("entered into register");
    if (this.isValidForm()) {
      this.newUser.role='employee'
      var formData = new FormData();
      if(this.newUser.employee_name!=undefined &&this.newUser.email_id!=undefined && this.newUser.password &&this.newUser.location  &&this.selectedFile &&this.newUser.mobile_number){
        formData.append('employee_name',this.newUser.employee_name)
        formData.append('role',this.newUser.role)
        formData.append('email_id',this.newUser.email_id)
        formData.append('password',this.newUser.password)
        formData.append('location',this.newUser.location)
        formData.append('mobile_number',this.newUser.mobile_number+"")
        formData.append('image',this.selectedFile)
      }
          this.repo.userRegister(formData)
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

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  if(this.selectedFile!=undefined){

  }
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e: any) => {
    this.imageUrl = e.target.result;
  };
  reader.readAsDataURL(file);

  // for (var key in this.newUser) {
  //   if (this.newUser.hasOwnProperty(key)) {
  //     formData.append(key,this.newUser[key])

  //       }
  // }
}
}
