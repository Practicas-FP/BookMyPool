import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface deviceHistory {
  employee: string;
  position: number;
  lendingDate: string;
  returningDate: string;
}

const ELEMENT_DATA: deviceHistory[] = [
  {position: 1, employee: 'David Aguilar', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Victor Monzó', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Alvaro Albarracín', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Nico Esteban', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Jose Hernández', lendingDate: '15-04-22', returningDate: '22-05-22'},
  {position: 1, employee: 'Alvaro Carrillo', lendingDate: '15-04-22', returningDate: '22-05-22'},
];
