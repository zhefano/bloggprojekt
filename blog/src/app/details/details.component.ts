import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  postId: any;
  blogPost: any;
  posts: any[] = [];
  newComment = '';
  totalComments: number = 0;

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.isLocalStorageAvailable()) {
      const storedPosts = localStorage.getItem('allPosts');
      this.posts = storedPosts ? JSON.parse(storedPosts) : [];
    }

    this.activatedRoute.paramMap.subscribe((params) => {
      this.postId = params.get('id');
      console.log('Post ID:', this.postId);
      this.getPostData(this.postId);
    });
  }

  isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  calculateComments() {
    this.totalComments = this.blogPost?.comments?.length || 0;
  }

  getPostData(id: any) {
    this.blogPost = this.posts.find((x) => x.id == id);
    if (this.blogPost) {
      this.calculateComments();
    } else {
      console.error('Post not found for ID:', id);
    }
  }

  likePost() {
    if (this.blogPost) {
      this.blogPost.likes++;
      this.updateLocalStorage();
    }
  }

  dislikePost() {
    if (this.blogPost) {
      this.blogPost.dislikes++;
      this.updateLocalStorage();
    }
  }

  addComment() {
    if (this.newComment.trim() && this.blogPost) {
      this.blogPost.comments.push(this.newComment.trim());
      this.newComment = '';
      this.calculateComments();
      this.updateLocalStorage();
    }
  }

  private updateLocalStorage() {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('allPosts', JSON.stringify(this.posts));
    }
  }
}
