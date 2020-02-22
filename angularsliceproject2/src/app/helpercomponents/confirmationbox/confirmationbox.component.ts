import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  dialogTitle: "",
  dialogText: ""
  dialogCancel: "",
  dialogAccept: "",
  dialogShowCancel: "true"
}

@Component({
  selector: 'app-confirmationbox',
  templateUrl: './confirmationbox.component.html',
  styleUrls: ['./confirmationbox.component.css']
})

export class ConfirmationboxComponent implements OnInit {

  @Input('title') title:any;
  @Input('content') content:any = "Content";
  @Input('cancel') cancel:any = "Cancel";
  @Input('accept') accept:any = "Accept";
  @Input('showcancel') showcancel:any = "true" // true or false

  result:number = -1; // -1 default
  // 1 = decline
  // 2 = accept
  @Output() myEvent = new EventEmitter<string>();

  callParent() {
  
  }
  
  constructor(public dialog: MatDialog) { }

  openDialog() {
     const dialogRef = this.dialog.open(ConfirmationboxDialog, {
      data: {
        dialogTitle: this.title,
        dialogContent: this.content,
        dialogCancel: this.cancel,
        dialogAccept: this.accept,
        dialogShowCancel: this.showcancel
        }     
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == false)
        this.result = 1;
      else if (result == true)
      this.result = 2;

      this.myEvent.emit('eventDesc');
    });
  }

  ngOnInit() {

  }
  
}

@Component({
  selector: 'confirmation-box-dialog',
  templateUrl: 'confirmation-box-dialog.html',
})
export class ConfirmationboxDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
