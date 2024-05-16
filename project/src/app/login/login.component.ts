import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    email : String='';
    password : String='';

    onLogin() {
      if (this.email == 'admin@gmail.com' && this.password == 'admin123') {
       alert("login successfull")
      } else {
        alert("enter valid data")
      }
    }

}
