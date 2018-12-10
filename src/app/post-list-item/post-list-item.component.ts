import { DataService } from './../services/data.service';
import { Post } from './../models/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  isSuccessfulPost: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.checkPostSuccessfulness();
  }

  upVote() {
    this.post.loveIts ++;
    this.checkPostSuccessfulness();
  }

  downVote() {
    this.post.loveIts --;
    this.checkPostSuccessfulness();
  }

  removePost(post: Post) {
    this.dataService.deletePost(post);
  }

  checkPostSuccessfulness() {
    this.isSuccessfulPost = this.post.loveIts > 0 ? true : false;
  }

}
