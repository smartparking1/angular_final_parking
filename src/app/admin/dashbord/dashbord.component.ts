import { Component, OnInit } from '@angular/core';
import { RepositryService } from 'src/app/model/repositry.service';
import { vehicle } from 'src/app/model/vehilcle.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  allcustomers:vehicle[]=[]
  totalVehicles:number=0
  total_amout:number=0
  constructor(private repo:RepositryService) { }

  ngOnInit(): void {

  }
  allcustomerslist(){
    this.allcustomers=this.repo.getallusers()
    this.totalVehicles=(this.allcustomers.length)+1
    this.total_amout=0
    this.allcustomers.forEach(
      (vehicle)=>{
        if(vehicle.total_amount!=undefined){
          this.total_amout+=vehicle.total_amount
        }
      }
    )
    return this.allcustomers

  }
}
