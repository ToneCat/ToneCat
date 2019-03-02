import { Component, Input } from '@angular/core';
import { CommentsService } from './comments.service';



@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [CommentsService]

})
export class CommentsComponent  {
  @Input() name: string;
  @Input() course: string;
  comments;

  constructor(private commentsService: CommentsService) {
   
  }

 

  getComments(id){
   this.commentsService.getComments()
      .toPromise()
      .then((response) => {
        var str = id;
        var num = +str;
        const a = response.filter(response => response.postId === num);
        this.comments = a;
         console.log(a);
      })
      .catch((error) => {
        console.error(error);
      });
  }


}
