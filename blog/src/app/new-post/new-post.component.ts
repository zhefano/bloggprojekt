import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent { 
  post = {
    title: '',
    thumbnailUrl: '',
    body: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: []
  };
  constructor(private apiService:ApiService){

  }
  onSubmit(){
    this.apiService.addPost(this.post);
    alert("Your post has been uploaded successfully");
    this.post= {
      title: '',
      thumbnailUrl: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: []
    };
  }

}
