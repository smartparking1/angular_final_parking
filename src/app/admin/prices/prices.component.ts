import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  selectedbuilding?:string;
  buildings:Building[]=[];
  selectedDay?:string;
  selectedVehicle?:string;
  enteredPrice?:number;


  constructor(private repository:RepositryService) {
      this.buildings = this.repository.getListOfBuildings()
      console.log(this.buildings)
   }

  ngOnInit(): void {

  }

addPrice(form: NgForm) {
  if (form.valid) {
    const formData = form.value;
    this.repository.addPrice(formData);
    // form.resetForm()
  }
}

}
