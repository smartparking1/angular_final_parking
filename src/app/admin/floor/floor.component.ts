import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  constructor(private repo:RepositryService) { }

  public ListOfBuilding:Building[]=[]

  ngOnInit(): void {
  this.ListOfBuilding =  this.repo.getListOfBuildings()
  console.log(this.ListOfBuilding)
  }
  listOfbuilding(){
    return this.ListOfBuilding
  }
}
