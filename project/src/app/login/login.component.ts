import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginobj : any = {
      email : '',
    password :'',
    }

    constructor(private http: HttpClient){}
    
    onLogin() {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('http://localhost:3000/login', this.loginobj,{ headers, responseType: 'text' })
        .subscribe(
          response => {
            console.log('Login successful', response);
            alert('Login successful');
          },
          error => {
            console.error('Error during login', error);
            alert('Invalid email or password');
          }
        );
    }

}
