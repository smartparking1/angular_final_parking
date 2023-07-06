import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Building } from 'src/app/model/building.model';

@Component({
  selector: 'app-employee-homepage',
  templateUrl: './employee-homepage.component.html',
  styleUrls: ['./employee-homepage.component.css']
})
export class EmployeeHomepageComponent implements OnInit {

  constructor(private activerout:ActivatedRoute,private router:Router) { }
   public selectebuilding:Building=new Building()
  ngOnInit(): void {
    this.activerout.queryParams.subscribe(params => {
      const object = JSON.parse(params['data']);
     this.selectebuilding=object
    });
  }

  choosingSections(selectedpoint:string){
    console.log(this.selectebuilding)
    if(selectedpoint=='Entry'){
      this.router.navigate(['/employee/employee/entrypoint'], { queryParams: { data: JSON.stringify(this.selectebuilding) } });
    }
    else if(selectedpoint='visiting'){
      this.router.navigate(['/employee/employee/finepoint'], { queryParams: { data: JSON.stringify(this.selectebuilding) } });
    }
    else if(selectedpoint='Exit'){
      this.router.navigate(['/employee/employee/exitpoint'], { queryParams: { data: JSON.stringify(this.selectebuilding) } });
    }
  }

}
