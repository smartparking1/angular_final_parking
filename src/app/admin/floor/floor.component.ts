import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Floor } from 'src/app/model/floor.model';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { NgForm } from '@angular/forms';
import { RestDataService } from 'src/app/model/rest-data.service';



@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  selectednumber?:string;
  numbers: number[] = [];
  buildings:Building[]=[];
  uniqueBuildings:any[]=[];
  filterBuildings:Building[]=[];
  showBox = false;
  floor=new Floor();
  selectedbuilding?:string;
  selectedlocation?:string;
  size?:number

  constructor(private http:HttpClient,private service:RepositryService, public restdata:RestDataService) {
     this.service.getListOfBuildings();
     console.log(this.service.getListOfBuildings())
   }

  ngOnInit(): void {

     this.getbuidings();
  }

  selectnumber(number:any): void {
    this.selectednumber=number+"-"+this.selectedbuilding;
    this.showBox= false;
  }

  showBox2(): void {
    this.showBox = !this.showBox;
  }
  onbuildingselction(name?:string){
    this.filterBuildings = [];
    console.log(this.selectedlocation)
    this.buildings.forEach((build)=>{
      if((build.building_name == this.selectedbuilding && build.no_of_floors)) {
        if( build.no_of_floors && build.location==this.selectedlocation ) {
          this.size = build.no_of_floors
          console.log(this.size)
          this.numbers = Array.from({ length: this.size })
        }
        this.filterBuildings.push(build)
      }
    })

  }
  addFloor(form:NgForm){
    console.log(form.value)
    this.service.addFloor(form.value)
  }
  onClickBuilding() {
    this.filterBuildings = [];
  }

  getbuidings(){
    this.restdata.getListOfBuildings().subscribe(
      (res)=>{
        console.log(res)
      this.buildings=res;
      this.uniqueBuildings= Array.from(new Set(this.buildings.map((item) => item.building_name)));
        console.warn(this.buildings)
        console.warn(this.uniqueBuildings)
      })
    }
  }
