import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  bookDevice(id: Number) {
    alert(id)
  }

}
