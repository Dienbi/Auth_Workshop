import { Component } from '@angular/core';
import { AthentificationService } from '../athentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AthentificationService) {
  }

  login(d: any): void {
    this.authService.singin(d).subscribe(
      (response) => {
// Stockez le jeton JWT dans le stockage local
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.role);
      }
    );
  }
}
