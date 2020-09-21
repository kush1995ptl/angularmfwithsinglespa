import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['/main']);
  }
}
