import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { BookData } from '../models/book';
import { BrandData } from '../models/brand';
import { DevicesData } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://book-my-pool.herokuapp.com/bookmypool';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<DevicesData[]> {
    return this.http.get<DevicesData[]>(`${this.baseUrl}/device`);
  }

  getBooks(id: Number): Observable<BookData[]> {
    return this.http.get<BookData[]>(`${this.baseUrl}/lend/byuser/${id}`);
  }

  getBrands(): Observable<BrandData[]> {
    return this.http.get<BrandData[]>(`${this.baseUrl}/brand`);
  }

  getDevice(id: Number): Observable<DevicesData> {
    return this.http.get<DevicesData>(`${this.baseUrl}/device/${id}`);
  }

  putDevice(device: DevicesData) {
    const body = JSON.stringify(device);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.put<DevicesData>(`${this.baseUrl}/device`, body, httpOptions)
      .subscribe(res => console.log(`Device put: ${res}`));
  }

  postDevice(device: DevicesData) {
    const body = JSON.stringify(device);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<DevicesData>(`${this.baseUrl}/device`, body, httpOptions)
      .subscribe(res => console.log(`Device post: ${res}`));
  }

  deleteDevice(id: Number) {
    this.http.delete(`${this.baseUrl}/device/${id}`)
      .subscribe(res => console.log(`Device delete: ${res}`));
  }

  bookDevice(book: BookData) {
    const body = JSON.stringify(book);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post<DevicesData>(`${this.baseUrl}/lend`, body, httpOptions)
      .subscribe(res => console.log(`Book post: ${res}`));
  }

  returnDevice(id: Number) {
    this.http.post<DevicesData>(`${this.baseUrl}/lend/returndevice/${id}`, { })
      .subscribe(res => console.log(`Device returned: ${res}`));
  }

  logIn(email: String, password: String) {

  }
}
