import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RepositryService } from 'src/app/model/repositry.service';
import { vehicle } from 'src/app/model/vehilcle.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-fine-amount',
  templateUrl: './finepage.component.html',
  styleUrls: ['./finepage.component.css']
})
export class FinepageComponent implements OnInit {
  input1?: string;
  input2?: string;
  vehicle:vehicle = new vehicle()
  constructor(private repo:RepositryService){}
  ngOnInit(): void {

  }
  isInput1Empty(): boolean {
    return !this.input1;
  }

  isInput2Empty(): boolean {
    return !this.input2;
  }

  onSubmit(form:NgForm) {

    if(this.vehicle.vehicle_no != null && this.vehicle.fine_amount != null) {
      this.repo.updateFineAmount(this.vehicle)
      Swal.fire("Fine Amount Updated","","success")
      this.resetForm(form);

    }

  }
  resetForm(form: NgForm) {
    form.resetForm();
  }

}
