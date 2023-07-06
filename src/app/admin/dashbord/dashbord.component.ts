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
  total_amout:number=0
  constructor(private repo:RepositryService) { }

  ngOnInit(): void {

    this.allcustomers=this.repo.getallusers()
    console.log(this.allcustomers)
    this.allcustomers.forEach( vehicle=>{
      if(vehicle.total_amount!=null){
        this.total_amout+=vehicle.total_amount
      }

    })
    console.log(this.total_amout,"this is the amout we are getting ")
  }
  allcustomerslist(){
    this.allcustomers=this.repo.getallusers()
    console.log(this.allcustomers)
    this.allcustomers.forEach( vehicle=>{
      if(vehicle.total_amount!=null){
        this.total_amout+=vehicle.total_amount
      }

    })
    console.log(this.total_amout,"this is the amout we are getting ")
    return this.allcustomers

  }
}
