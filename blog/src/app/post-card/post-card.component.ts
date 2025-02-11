import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post:any;
  totalComments=0;
  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.totalComments=this.post?.comments.length;
    console.log(this.post)
  }
  routeToDetails(id: any): void {
    this.router.navigate(['details', id]);
  }
}
