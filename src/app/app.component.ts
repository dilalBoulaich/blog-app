import { Post } from './models/post';
import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  posts = new Array<Post>();

  constructor() {

  }

  ngOnInit() {
    this.posts.push(...[{
      title: "Post1",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      loveIts: 6,
      dontLoveIts: 2,
      created_at: new Date()
    },
    {
      title: "Post2",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      loveIts: 2,
      dontLoveIts: 10,
      created_at: new Date()
    },
    {
      title: "Post3",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      loveIts: 30,
      dontLoveIts: 0,
      created_at: new Date()
    },
    {
      title: "Post4",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti",
      loveIts: 0,
      dontLoveIts: 1,
      created_at: new Date()
    }
  ]);
  }
}
