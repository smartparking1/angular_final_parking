import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Building } from 'src/app/model/building.model';
import { RepositryService } from 'src/app/model/repositry.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  public building: Building = new Building()
  selectedFile: File | undefined;
  submitted = false;
  form!: FormGroup;
  statusError: boolean = false;
  selectedstatus?: string
  imageUrl: string = ''
  constructor(private repo: RepositryService, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      buildingName: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required], // Include Validators.required
      noOfFloors: ['', Validators.required]
    });
  }



  saveBuilding() {
    this.submitted = true;
    console.log(this.building);
    console.log("inside save method")

    if (this.isValidForm()) {
      if (this.selectedstatus) {
        this.statusError = false
      }

    }
    else {
      console.log("invalid form");
      this.statusError = true;
    }

    const formData = new FormData();
    if (this.building.building_name && this.building.no_of_floors && this.building.location && this.building.status) {
      formData.append('building_name', this.building.building_name);
      formData.append('location', this.building.location);
      formData.append('no_of_floors', this.building.no_of_floors.toString());
      formData.append('status', this.building.status);
    }

    if (this.selectedFile) {
      formData.append('images', this.selectedFile);

      
      this.repo.addBuilding(formData)
    }
  }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  isValidForm() {
    return (this.building.building_name &&
      this.building.location &&
      this.building.no_of_floors &&
      this.building.status);
  }
}
