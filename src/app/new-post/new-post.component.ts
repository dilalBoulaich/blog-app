import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }
  
  onPostAdded(data: NgForm) {
    this.dataService.addPost(data.value.titre, data.value.content);
    this.router.navigate(['/posts']);
  }

}
