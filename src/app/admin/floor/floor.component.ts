import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { HttpClient } from '@angular/common/http';
import { Floor } from 'src/app/model/floor.model';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { NgForm } from '@angular/forms';
import { RestDataService } from 'src/app/model/rest-data.service';



=======
import { NgForm } from '@angular/forms';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Floor } from 'src/app/model/floor.model';
>>>>>>> Stashed changes
@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
<<<<<<< Updated upstream
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
=======
selectedbuilding: any='default';
selectednumber?:string;
numbers?: number[];
buildings?:string[]=[]
showBox = false;
size?:number;
imageurl?:string;
buildingList:Building[]=[];
constructor(private repo:RepositryService,private http:HttpClient) { }
floor=new Floor()
ngOnInit(): void {
//
 this.buildingList=this.buildinglists
 console.log(this.buildingList)
 this.buildingList.forEach((Element:any)=>{
     this.size=parseInt(Element.no_of_floors);
     this.buildings?.push(Element.building_name)
   })

}
selectnumber(number:any): void {
  this.selectednumber=number+this.selectedbuilding;
  console.log("++++++++++++++")
  console.log('Selected number:', this.selectednumber);
  // Perform any desired actions with the selected number
  this.hideBox(); // Hide the box after selecting a number
}

showBox2(): void {
  this.showBox = true;
}

hideBox(): void {
  this.showBox = false;
}
onbuildingselction(name?:string){
  console.log("==================================")
  console.log(this.buildingList)
  this.buildingList.forEach(e=>{
    if(e.building_name==this.selectedbuilding){
       this.imageurl=e.image_url

       console.log("==================================")
      console.log(e.images)
    }
  })
  console.log(this.selectedbuilding)
  this.numbers=Array(this.size);
  console.log(this.numbers)

}
addbuilding(){
  console.log(this.selectedbuilding)

  }


onfloorselction() {
throw new Error('Method not implemented.');
}


savefloor(form:NgForm) {

  this.buildingList.forEach(e=>{
    if(e==this.selectedbuilding){
      this.floor.building=this.selectedbuilding
    }
  })

  this.floor.floor_no=this.selectednumber;
  console.log(this.floor)
  this.repo.addfloor(this.floor)

}

get buildinglists(){
  return this.repo.getListOfBuildings();
}

}
>>>>>>> Stashed changes
