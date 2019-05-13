import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginRegister = 'login';
  email: string = null;
  password: string = null;
  userName: string = null;

  constructor() { }

  ngOnInit() {
  }

}
