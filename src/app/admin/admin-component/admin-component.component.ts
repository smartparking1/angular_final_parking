import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-component',
  template:'<router-outlet></router-outlet>'


})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
