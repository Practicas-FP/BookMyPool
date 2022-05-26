import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookDeviceData } from 'src/app/models/book-device';
import { DevicesData } from 'src/app/models/device';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  displayedColumns: string[] = ['serialNumber', 'brand', 'model', 'operativeSystem', 'version', 'actions'];
  dataSource!: MatTableDataSource<BookDeviceData>;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  bookDevices: Array<BookDeviceData> = [];

  constructor(public apiService: ApiService) {
    apiService.getBooks(2).subscribe(books => {
      books.map(book => apiService.getDevice(book.deviceId).subscribe(device => {
        this.bookDevices.push({book: book, device: device});

        this.dataSource = new MatTableDataSource(this.bookDevices);

        this.dataSource.paginator = this.paginator!;
        this.dataSource.sort = this.sort!;
      }));
    });
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator!;
    // this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  returnDevice(id: number){
    this.apiService.returnDevice(id);
    //this.devices = [];
    //this.apiService.getDevices().subscribe(devices => {
    //  devices.map(device => this.devices.push(device));
    //  this.dataSource = new MatTableDataSource(this.devices);
    //  this.table?.renderRows();
    //  this.dataSource.paginator = this.paginator!;
    //  this.dataSource.sort = this.sort!;
    //});
  }
}
