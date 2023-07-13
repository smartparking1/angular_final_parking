import { Component } from '@angular/core';
import { error } from 'console';
import { RepositryService } from 'src/app/model/repositry.service';
import { RestDataService } from 'src/app/model/rest-data.service';
import { User } from 'src/app/model/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './settings.component.html',
    styleUrls: [ './settings.component.css' ]
})
export class SettingsComponent {

  public emplpoyeeList!:User[]

  constructor(private restService :RestDataService,private repo:RepositryService) {

    this.restService.gettingallEmployees().subscribe(
      (responce)=>{
        this.emplpoyeeList=responce
      },
      (error)=>{
        alert('okkk')
      }
    )

  }
  chaingRole(email:any){
    console.log(email)
    this.repo.changeRole(email)
    this.restService.gettingallEmployees().subscribe(
      (responce)=>{
        this.emplpoyeeList=responce
      },
      (error)=>{
        alert('okkk')
      }
    )
    console.log(this.emplpoyeeList)
  }
  deleteEmployee(email:any){
    this.repo.deleteEmployee(email)

  }
}

