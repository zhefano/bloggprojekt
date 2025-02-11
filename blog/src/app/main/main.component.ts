import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allPosts: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage.getItem('allPosts')) {
      const storedPosts = localStorage.getItem('allPosts');
      this.allPosts = storedPosts ? JSON.parse(storedPosts) : [];
    } else {
      this.initializeDefaultPosts();
    }
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }

  initializeDefaultPosts(): void {
    this.allPosts = [
      {
        id: 1,
        title: 'Example Article 1',
        thumbnailUrl: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl malesuada scelerisque. Curabitur eget risus ac nulla suscipit gravida.',
        creationDate: new Date(),
        likes: 0,
        dislikes: 0,
        comments: []
      },
      {
        id: 2,
        title: 'Example Article 2',
        thumbnailUrl: 'https://images.unsplash.com/photo-1737923336697-621a80820522?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        creationDate: new Date(),
        likes: 0,
        dislikes: 0,
        comments: []
      },
      {
        id: 3,
        title: 'Example Article 3',
        thumbnailUrl: 'https://images.unsplash.com/photo-1738924349706-14d70715e236?q=80&w=2805&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        creationDate: new Date(),
        likes: 0,
        dislikes: 0,
        comments: []
      }
    ];
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('allPosts', JSON.stringify(this.allPosts));
    }
  }
}