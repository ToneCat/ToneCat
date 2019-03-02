import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { AllPostsComponent } from './allposts.component';
import { AllPostsService } from './allposts.service';

import { SinglePostComponent } from './singlepost.component';
import { SinglePostService } from './singleposts.service';

import { CommentsComponent } from './comments.component';
import { CommentsService } from './comments.service';

import { PostCommentComponent } from './postcomment.component';
import { PostCommentService } from './postcomment.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, AllPostsComponent, CommentsComponent, SinglePostComponent, PostCommentComponent ],
  providers:    [ AllPostsService, SinglePostService, CommentsService, PostCommentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
