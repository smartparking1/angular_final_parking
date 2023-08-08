import { HttpClient } from '@angular/common/http';
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
  imageUrl?:string
  constructor(private restService :RestDataService,private repo:RepositryService,private http:HttpClient) {

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

  getImage(imageId = 9): void {
    this.http.get(`http://127.0.0.1:8000/building/getimg/${imageId}`, { responseType: 'blob' })
      .subscribe((response: any) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result as string;
        };
        reader.readAsDataURL(response);
      });
  }
}

