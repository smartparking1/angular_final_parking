import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-choosebuilding',
  templateUrl: './choosebuilding.component.html',
  styleUrls: ['./choosebuilding.component.css']
})
export class ChoosebuildingComponent implements OnInit {

  constructor(private repo:RepositryService,private http:HttpClient,private router:Router) { }

  buildings:Building[]=[]
  building=new Building()
  ngOnInit(): void {

    this.http.get<Building[]>("http://127.0.0.1:8000/building/GettingAllBuildings/").subscribe(data=>{
      this.buildings=data
      console.log("in choose"+this.buildings+"in choose")
    })
}
color(parm:any):boolean{
  if(parm=='active'){
    // cons
    return true
  }
  else{
    return false
  }
}


updatebuilding(id: any,status:any) {
 this.buildings.forEach(e=>
    {
      if(e.building_id==id)
        {
          this.building=e
          this.building.status=status
        }
    })

    console.log(this.building.building_id);
    console.log(this.building.image_url);

    const formData = new FormData();

    if ( this.building.building_name && this.building.no_of_floors && this.building.location && this.building.status) {
      formData.append('building_id', id);
      formData.append('building_name', this.building.building_name);
      formData.append('location', this.building.location);
      formData.append('no_of_floors', this.building.no_of_floors.toString());
      formData.append('status', this.building.status);
    }

    // Fetch the file data from the URL
    this.http.get(this.building.image_url, { responseType: 'blob' }).subscribe((blob) => {
      const file = new File([blob], 'img.jpg');
      console.log(blob)
      console.log(file)

      formData.append('images', file);
      console.log(formData)
      // Send the request with the updated form data
      // console.log(building);
      return this.http.patch<Building>(`http://127.0.0.1:8000/building/UpdateBuildingAndDeleteBuildingGettingParticularBuilding/${id}/`, formData).subscribe(d=>console.log(d));
    });
    console.log(this.building)
    //this.repo.updatebuilding(this.building)

}
selectedBuilding(building:Building){
  console.log(building)
  this.router.navigateByUrl('/employee/employee/home')
  this.router.navigate(['/employee/employee/home'], { queryParams: { data: JSON.stringify(building) } });
}

}
