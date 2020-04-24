import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html'
})
export class LoginPage implements OnInit {

  selectedTab = 'login';

  constructor() { }

  ngOnInit() {
  }
}
