import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { DevicesData } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = '';

  constructor(private http: HttpClient) { }

  /*getDevices(): Observable<DevicesData[]> {
    return this.http.get<DevicesData[]>(`${this.baseUrl}/device.json`)
      .pipe(
        catchError(this.handleError<DevicesData[]>('getDevices', []))
      );
  }*/

  getDevices() {
    return this.http.get(`${this.baseUrl}/devices`)
    .pipe(
      map((res:any) => {
        return res;
      })
    );
  }

  putDevice(device: DevicesData) {

  }

  postDevice(device: DevicesData) {

  }

  deleteDevice(id: Number) {

  }

  bookDevice(id: Number) {
    alert(id)
  }

  logIn(name: String, password: String) {

  }

  returnDevice(id: Number) {

  }
}
