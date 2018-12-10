import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent} ,
  
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/posts',
    pathMatch: 'full'  
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NavbarComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
