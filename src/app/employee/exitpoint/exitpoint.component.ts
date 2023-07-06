import { Component } from "@angular/core";
import { RepositryService } from "src/app/model/repositry.service";
import { vehicle } from "src/app/model/vehilcle.model";


@Component({
selector:'exit',
templateUrl:'./exitpoint.component.html'
})

export class ExitpointComponent{
  constructor(public repository:RepositryService ){}

  vehiclee?:string= "";
  public vehicleDet:vehicle|undefined;
  totalVehicles:vehicle[]=[];
  vehNumber:string="";

   get getVehicles()
  {
   
    this.repository.getVehicleDetails(this.vehiclee)
    return this.totalVehicles;
  }


}
