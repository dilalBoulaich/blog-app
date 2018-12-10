import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  postsSubject = new Subject<any[]>();
  posts = new Array<Post>();

  constructor() {
    this.posts.push(...[{
        title: "Post1",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        loveIts: 6,
        created_at: new Date()
      },
      {
        title: "Post2",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        loveIts: -2,
        created_at: new Date()
      }
    ]);
  }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    let newPost: Post = {
      title: title,
      content: content,
      loveIts: 0,
      created_at: new Date()
    };

    this.posts.push(newPost);
    this.emitPostSubject();
  }

  deletePost(postToDelete: Post) {
    this.posts = this.posts.filter((post, index) => {
      if(post.title != postToDelete.title)
        return post;  
    });
    this.emitPostSubject();
  }
}
