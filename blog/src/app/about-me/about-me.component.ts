import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from "../form/form.component";
import { DetailsComponent } from "../details/details.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [FormsModule, FormComponent, DetailsComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  user = {
    name: 'Noel',
    profession: 'Frontend Developer',
    bio: 'Hi, I\'m Noel. With a passion for web development and innovation, I strive to create modern and user-friendly digital solutions. I am always curious about new technologies and methods to improve my projects and contribute to a better digital world.',
    contactInfo: {
      email: 'noelblom98@hotmail.com',
      phone: '073*******',
      address: '1, 12345 Example City'
    },
    profileImageUrl: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Replace with your actual profile image URL if needed
  };
}