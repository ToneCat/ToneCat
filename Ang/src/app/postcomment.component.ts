import { Component, Input } from '@angular/core';
import { PostCommentService } from './postcomment.service';



@Component({
  selector: 'postcomment',
  templateUrl: './postcomment.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],

})
export class PostCommentComponent  {
  @Input() name: string;
  @Input() course: string;
  postselect;
  commentselect;

  constructor(private postcommentService: PostCommentService) {
   
  }

  getPostPlusComments(id){
   this.postcommentService.getPostTwo()
      .toPromise()
      .then((response) => {
        var str = id;
        var num = +str;
        const a = response.filter(response => response.id === num);
        this.postselect = a;
         console.log(a);
      })
      .catch((error) => {
        console.error(error);
      });
  
  this.postcommentService.getCommentsForPost()
      .toPromise()
      .then((response) => {
        var str = id;
        var num = +str;
        const a = response.filter(response => response.postId === num);
        this.commentselect = a;
         console.log(a);
      })
      .catch((error) => {
        console.error(error);
      });
  }



}