import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DevicesData } from 'src/app/models/device';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  public BrandControl = new FormControl('', Validators.required);
  public ModelControl = new FormControl('', Validators.required);
  public SerialNumbControl = new FormControl('', Validators.required);
  public OSControl = new FormControl('', Validators.required);
  public VersionControl = new FormControl('', Validators.required);
  public brandSmartphone = 'null';

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DevicesData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  alert() {
    alert(this.data.serialNumber)
  }
}
