import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  contact = {
    name: '',
    email: '',
    message: ''
  };



  onSubmit() {
    console.log('Contact Form Submitted!');
    console.log('Name:', this.contact.name);
    console.log('Email:', this.contact.email);
    console.log('Message:', this.contact.message);
    this.contact={
      name: '',
      email: '',
      message: ''
    };
  }
}
