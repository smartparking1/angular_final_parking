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
    return this.repo.chekingAdminLoginStatus()
  }
}
