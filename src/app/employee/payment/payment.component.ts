import { Component,Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { RepositryService } from "src/app/model/repositry.service";
import Swal from "sweetalert2";

export interface DialogData {
  paymentType: 'upi' | 'card' | 'cash';
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './payment.component.html',
  styleUrls:['./payment.component.css']
})
export class PaymentComponent {
  active:boolean=true;
  constructor( public dialog:MatDialog) {}

  closeDialog()
  {
    this.dialog.closeAll();
  }

  openDialog(type:string) {

    this.dialog.open(PaymentModeDialog, {
      data: {
        paymentType: type,
      },
    });
  }
}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './paymentMode.component.html',

})
export class PaymentModeDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public router:Router,public dialog:MatDialog,private repo:RepositryService) {
    console.log(data)
  }

  payment()
  {

  Swal.fire({
  title: 'Are you sure?',
  text: "You won't to confirm the payment!",
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, continue!'
  }).then((result) => {
  if (result.isConfirmed) {
    this.repo.getSlip()

    Swal.fire(
      'Payment Succesful!',
      '',
      'success'
    ).then((result)=>{




      this.dialog.closeAll();
      this.router.navigateByUrl("/employee/employee/exitpoint")
    })
  }
})
  }

}
