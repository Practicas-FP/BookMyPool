import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { BookData } from '../models/book';
import { DevicesData } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://bookmypool.herokuapp.com/bookmypool';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<DevicesData[]> {
    return this.http.get<DevicesData[]>(`${this.baseUrl}/device`);
  }

  getBooks(): Observable<BookData[]> {
    return this.http.get<BookData[]>(`${this.baseUrl}/lend`);
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

  bookDevice(id: Number) {
    alert(id)
  }

  logIn(name: String, password: String) {

  }

  returnDevice(id: Number) {

  }
}
