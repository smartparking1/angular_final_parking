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
public building:Building=new Building()
  selectedFile: File | undefined;
  submitted = false;
  form!: FormGroup;
   statusError:boolean=false;
   selectedstatus?:string
  constructor(private repo: RepositryService, private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      buildingName: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required], // Include Validators.required
      noOfFloors: ['', Validators.required]
    });
  }
  saveLogin() {
    this.submitted=true;
    console.log(this.building);
    console.log("inside save method")

    if (this.isValidForm()){
   if(this.selectedstatus){
    this.statusError=false
   }
      console.log(" formmm")
      this.repo.addBuilding(this.building);
      console.log("valid form")
    }
    else{
      console.log("invalid form");
        // if (!this.selectedstatus) {
          this.statusError = true;
        // }
    }
    console.log(this.building.building_name);
    const formData = new FormData();
    console.log(this.building.status);
    console.log(this.building.no_of_floors);
    console.log(this.building.location);

    if (this.building.building_name && this.building.no_of_floors && this.building.location && this.building.status) {
      formData.append('building_name', this.building.building_name);
      formData.append('location', this.building.location);
      formData.append('no_of_floors', this.building.no_of_floors.toString());
      formData.append('status', this.building.status);
    }

    if (this.selectedFile) {
      formData.append('images', this.selectedFile);
      this.repo.addBuilding(formData)

      console.log('FormData:', formData);
      // this.http.post<Building>('http://127.0.0.1:8000/building/addingbuilding/', formData).subscribe((response) => {
      //  console.log('image added');
      //  console.log(response)
      // });
    }
  }


      onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
      }

  isValidForm() {
   return (this.building.building_name &&
      this.building.location &&
      this.building.no_of_floors &&
      this.building.status);
  }
}
