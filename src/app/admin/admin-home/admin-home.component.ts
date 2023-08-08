import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private repo:RepositryService,private http:HttpClient) { }

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
    const formData = new FormData();

    if ( this.building.building_name && this.building.no_of_floors && this.building.location && this.building.status) {
      formData.append('building_id', id);
      formData.append('building_name', this.building.building_name);
      formData.append('location', this.building.location);
      formData.append('no_of_floors', this.building.no_of_floors.toString());
      formData.append('status', this.building.status);
    }

    // Fetch the file data from the URL
    this.http.get(this.building.image, { responseType: 'blob' }).subscribe((blob) => {
      const file = new File([blob], 'img.jpg');


      // formData.append('images', file);
      console.log(formData)
      return this.http.put<Building>(`http://127.0.0.1:8000/building/UpdateBuildingAndDeleteBuildingGettingParticularBuilding/${id}/`, formData).subscribe(d=>console.log(d));
    });
    console.log(this.building)
    //this.repo.updatebuilding(this.building)

}
getImageSource(imageData: string): string {
  return 'data:image/jpeg;base64,' + imageData;
}

}
