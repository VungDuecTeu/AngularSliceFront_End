import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmationbox',
  templateUrl: './confirmationbox.component.html',
  styleUrls: ['./confirmationbox.component.css']
})
export class ConfirmationboxComponent implements OnInit {

  @Input('title') title:any = "Title";
  @Input('content') content:any = "Content"
  // dialogRef;

  constructor(public dialog: MatDialog) { }

  // openDialog() {
  //   this.dialogRef = this.dialog.open(ConfirmDialogModel);

  //   this.dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  // onConfirm(): void {
  //   // Close the dialog, return true
  //   this.dialogRef.close(true);
  // }
 
  // onDismiss(): void {
  //   // Close the dialog, return false
  //   this.dialogRef.close(false);
  // }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {

    // this.openDialog();
  }
  
//   title: string = "";
//   message: string = "";
 
//   constructor(public dialogRef: MatDialogRef<ConfirmationboxComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
//     // Update view with given values
//     this.title = data.title;
//     this.message = data.message;
//   }
  
//   onConfirm(): void {
//     // Close the dialog, return true
//     this.dialogRef.close(true);
//   }
 
//   onDismiss(): void {
//     // Close the dialog, return false
//     this.dialogRef.close(false);
//   }
// }
}

export class DialogContentExampleDialog {}
