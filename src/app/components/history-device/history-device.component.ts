import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDeviceData } from 'src/app/models/employee-device';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-device',
  templateUrl: './history-device.component.html',
  styleUrls: ['./history-device.component.css']
})
export class HistoryDeviceComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'employee', 'lendingDate', 'returningDate'];
  dataSource = new MatTableDataSource<deviceHistory>(ELEMENT_DATA);


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  employesDevices: Array<EmployeeDeviceData> = [];

  displayedColumns: string[] = ['serialNumber', 'brand', 'model', 'operativeSystem', 'version', 'actions'];
  dataSource!: MatTableDataSource<EmployeeDeviceData>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(public apiService: ApiService, private route: ActivatedRoute) {
    apiService.getHistoryDevice(this.route.snapshot.params['id'])
      .subscribe(books => books.map(book => apiService.getEmployeeById(book.employeeId)
        .subscribe(employee => apiService.getDevice(book.deviceId)
          .subscribe(device => {
            this.employesDevices.push({
              employee: employee,
              device: device
            });

            this.dataSource = new MatTableDataSource(this.employesDevices);
            this.dataSource.paginator = this.paginator!;
            this.dataSource.sort = this.sort!;

            console.log(this.employesDevices)
          }))));
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface deviceHistory {
  employee: string;
  position: number;
  lendingDate: string;
  returningDate: string;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

const ELEMENT_DATA: deviceHistory[] = [
  {position: 1, employee: 'David Aguilar', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Victor Monzó', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Alvaro Albarracín', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Nico Esteban', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Jose Hernández', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Alvaro Carrillo', lendingDate: '15-04-22', returningDate: '22-05-22'},
];
