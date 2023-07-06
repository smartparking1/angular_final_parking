import { Component, OnInit } from '@angular/core';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private repo:RepositryService) { }

  ngOnInit(): void {
  }
 EmployeeList(){
   return this.repo.gettingallEmployees()
  }

}
