import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RepositryService } from 'src/app/model/repositry.service';
import { vehicle } from 'src/app/model/vehilcle.model';
import { DatePipe } from '@angular/common';
import { RestDataService } from 'src/app/model/rest-data.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit,AfterViewInit {

  allcustomers:vehicle[]=[]
  totalVehicles:number=0
  total_amout:number=0
  constructor(private repo:RepositryService,private cdr :ChangeDetectorRef,private restdata:RestDataService) {
    this.restdata.getAllVehicles().subscribe(
      (responce)=>{
        this.allcustomers=responce
        this.allcustomers.forEach(
          (vehicle)=>{
            if(vehicle.total_amount!=undefined){
              this.total_amout+=vehicle.total_amount
            }
          }
        )
        this.totalVehicles=this.allcustomers.length
      },
      (error)=>{

      }
    )
  }


  ngAfterViewInit() {

  }

  ngOnInit(): void {

  }
}
