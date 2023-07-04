import { Component, OnInit } from '@angular/core';
import { RepositryService } from './model/repositry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Smartparking';
  adminIsLoign:boolean=false

  constructor(private repo:RepositryService){

  }
  ngOnInit() {
    }
   chekingAdminLoginStatus(){
    // console.log('this is the method of cheklking the employee logind or not')
    return this.repo.chekingAdminLoginStatus()
  }
  loginStatus(){
    if (localStorage.getItem('user')){
      return true
    }
   else{
    return false
   }
  }
}
