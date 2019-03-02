import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostCommentService {
  constructor(private http: HttpClient) {}

  getPostTwo() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
   getCommentsForPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
