import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false;

  ngOnInit() {
  
    if (typeof window !== 'undefined' && window.localStorage) {
      const role = localStorage.getItem('role') || 'user';
      this.isAdmin = (role === 'admin');
    } else {
      
      this.isAdmin = false;
    }
  }

  toggleRole() {
    this.isAdmin = !this.isAdmin;
    localStorage.setItem('role', this.isAdmin ? 'admin' : 'user');
  }
}