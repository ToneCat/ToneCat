import { Component, Input } from '@angular/core';
import { AllPostsService } from './allposts.service';



@Component({
  selector: 'allposts',
  templateUrl: './allposts.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],

})
export class AllPostsComponent  {
  @Input() name: string;
  @Input() course: string;
  allposts;

  constructor(private allpostsService: AllPostsService) {
   
  }

  getPosts(){
   this.allpostsService.getAllPosts()
      .toPromise()
      .then((response) => {
        console.log(response);
        this.allposts = response;
      })
      .catch((error) => {
        console.error(error);
      });
  }


}
