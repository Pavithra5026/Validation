import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name:String='';
  email:String='';
  password:String='';
  
  constructor(){ }

  onRegister(){
    if(!(this.name=='' && this.email=='' && this.password=='')){
      alert("Enter valid information")
    }
    else{
      
      alert("registration successful")
    }
  }
}
