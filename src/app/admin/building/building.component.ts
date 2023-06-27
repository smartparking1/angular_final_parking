import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
public building:Building=new Building()
  constructor(private repo:RepositryService) { }

  ngOnInit(): void {
  }
  saveLogin(form:NgForm){
    console.log(this.building)

    this.repo.addBuilding(this.building)
      }
}
