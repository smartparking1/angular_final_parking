import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin-component',
  // template:'<router-outlet></router-outlet>'
  templateUrl:'./admin-component.html',
  styleUrls: ['./admin-component.css']



})
export class AdminComponent  {
  isSideNavOpened:boolean=false
  constructor() { }
  toggleSideNav() {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

}
