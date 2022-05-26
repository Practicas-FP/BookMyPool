import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  logIn(email: String, password: String) {
    this.apiService.logIn(email, password).subscribe(user => console.log(user));
  }
}
