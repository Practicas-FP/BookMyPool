import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DevicesData } from 'src/app/models/device';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements AfterViewInit {
  displayedColumns: string[] = ['state', 'serialNumber', 'brand', 'model', 'operativeSystem', 'version', 'actions'];
  dataSource!: MatTableDataSource<DevicesData>;
  private durationInSeconds: number = 2;
  public devices: Array<DevicesData> = [];

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(public apiService: ApiService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
    apiService.getDevices().subscribe(devices => {
      devices.map(device => this.devices.push(device));
      this.dataSource = new MatTableDataSource(this.devices);

      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort!;
    });
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator!;
    //this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  book(idDevice: Number) {
    //apiService.bookDevice(row.id);
  }

  openDialogEdit(data: DevicesData): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: {
        device: data,
        edit: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar('Edited, nice job ;D');
      }
    });
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: {
        device: null,
        edit: false
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.openSnackBar('Added, nice job ;D');
      }
    });
  }

  openSnackBar(msg: string) {
    this._snackBar.open(msg, 'Okey', {
      duration: this.durationInSeconds * 1000,
    });
  }
}
