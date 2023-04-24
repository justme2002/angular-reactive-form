import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts?: any[]

  constructor(private readonly postService?: PostService) {
    this.posts = this.postService?.posts
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
