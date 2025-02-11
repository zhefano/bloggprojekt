import { Injectable } from '@angular/core';
import { StorageService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private storageKey = 'allPosts';
  isAdmin: boolean = true;
  allPosts: any[] = [];

  constructor(private storageService: StorageService) {
    this.initializePosts();
  }

  toggleRole() {
    this.isAdmin = !this.isAdmin;
  }

  private initializePosts() {
   
    this.allPosts = this.storageService.getItem<any[]>(this.storageKey) || [];
    this.saveToLocalStorage();
  }

  getAllPosts() {
    return this.allPosts;
  }

  getPostById(id: any) {
    return this.allPosts.find(x => x.id === id);
  }

  addPost(formData: any) {
    const post = {
      id: this.allPosts.length + 1,
      title: formData.title,
      body: formData.body,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    };
    this.allPosts.push(post);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    this.storageService.setItem(this.storageKey, this.allPosts);
  }
}