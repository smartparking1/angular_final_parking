import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-choosebuilding',
  templateUrl: './choosebuilding.component.html',
  styleUrls: ['./choosebuilding.component.css']
})
export class ChoosebuildingComponent implements OnInit {

  constructor(private repo:RepositryService,private http:HttpClient) { }

  buildings:Building[]=[]

  ngOnInit(): void {


   this.buildings=this.buildinglists
 console.log(this.buildings)



}
get buildinglists(){
  return this.repo.getListOfBuildings();
}
}
