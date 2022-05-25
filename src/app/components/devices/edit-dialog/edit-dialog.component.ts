import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DevicesData } from 'src/app/models/device';
import { ApiService } from 'src/app/services/api.service';

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
  selectedBrand = new FormControl(this.data.device ? this.data.device.brand : null, [Validators.required]);
  selectedOs = new FormControl(this.data.device ? this.data.device.operativeSystem : null, [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(serialNumber: string, brand: string, model: string, os: string, version: string) {
    if(this.data.edit) {
      this.apiService.putDevice({
        id: null,
        serialNumber: serialNumber,
        brand: brand,
        model: model,
        operativeSystem: os,
        version: Number(version),
        isBooked: 0
      });
    } else {
      this.apiService.postDevice({
        id: null,
        serialNumber: serialNumber,
        brand: brand,
        model: model,
        operativeSystem: os,
        version: Number(version),
        isBooked: 0
      });
    }

    this.dialogRef.close(true);
  }
}
