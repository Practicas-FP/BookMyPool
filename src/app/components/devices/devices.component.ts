import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DevicesData } from 'src/app/models/device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements AfterViewInit {
  displayedColumns: string[] = ['serialNumber', 'brand', 'model', 'operativeSystem', 'version'];
  dataSource: MatTableDataSource<DevicesData>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor() {
    // Obtener los datos de la BD
    const devices: Array<DevicesData> = [];
    devices.push({
      id: 1,
      serialNumber: 'AAA',
      brand: 'xiaomi',
      model: 'Readmi Note 10 Pro',
      operativeSystem: 'Android',
      version: 11
    });
    devices.push({
      id: 1,
      serialNumber: 'bb',
      brand: 'xiaomi',
      model: 'Readmi Note 9 Pro',
      operativeSystem: 'Android',
      version: 12
    });

    this.dataSource = new MatTableDataSource(devices);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
