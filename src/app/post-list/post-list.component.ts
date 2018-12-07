import { post } from 'selenium-webdriver/http';
import { Post } from './../models/post';
import { Component, OnInit, Input } from '@angular/core';
import { parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  @Input() posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
