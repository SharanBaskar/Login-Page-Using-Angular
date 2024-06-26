// loginform.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent {
  username: string;
  password: string;

  constructor() {
    // Predefined username and password
    this.username = 'admin';
    this.password = 'password';
  }

  login() {
    // Implement login logic here
    if (this.username === 'admin' && this.password === 'password') {
      alert('Login successful!');
      // Example: Navigate to dashboard or call authentication service
    } else {
      alert('Invalid username or password');
      // Example: Show error message to user
    }

    // Clear username and password fields after logging in (optional)
     this.username = '';
     this.password = '';
  }
}
