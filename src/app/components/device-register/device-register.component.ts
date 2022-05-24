import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-device-register',
  templateUrl: './device-register.component.html',
  styleUrls: ['./device-register.component.css']
})
export class DeviceRegisterComponent implements OnInit {
  public BrandControl = new FormControl('', Validators.required);
  public ModelControl = new FormControl('', Validators.required);
  public SerialNumbControl = new FormControl('', Validators.required);
  public OSControl = new FormControl('', Validators.required);
  public VersionControl = new FormControl('', Validators.required);
  public brandSmartphone = 'null';

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  pushForm(brand: string, model: string, serial: string, os: string, version: string){

    console.log(brand + ', ' + model + ', ' + serial + ', ' + os + ', ' + version)
    this.openSnackBar()
  }

  openSnackBar(){
    this._snackBar.open('Added, nice job ;D', 'Okey');
  }


}
