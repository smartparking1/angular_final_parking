import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Floor } from 'src/app/model/floor.model';
@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
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
