import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Registerogj = {
    name: '',
    email: '',
    password: ''
  }; 

  
  constructor(private http: HttpClient) {}

  onRegister(){
    
    if (!this.Registerogj.name.trim() || !this.Registerogj.email.trim() || !this.Registerogj.password.trim()) {
      console.error('Please fill in all fields');
      alert('Please fill in all fields');
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:3000/register', this.Registerogj, { headers, responseType: 'text' })
      .subscribe(
        response => {
          console.log('User registered successfully', response);
          alert("Successfully registered")
        },
        error => {
          console.error('Error registering user', error);
          console.log("some error in registering")
        }
      );
  }
}
