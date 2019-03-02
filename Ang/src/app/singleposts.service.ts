import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SinglePostService {
  constructor(private http: HttpClient) {}

  getSinglePost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}