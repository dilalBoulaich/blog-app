import { post } from 'selenium-webdriver/http';
import { DataService } from './../services/data.service';
import { Post } from './../models/post';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts = new Array<Post>();
  postSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.postSubscription = this.dataService.postsSubject.subscribe((data) => {
      this.posts = data;
    });
    this.dataService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
