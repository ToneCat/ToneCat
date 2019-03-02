import { Component, Input } from '@angular/core';
import { SinglePostService } from './singleposts.service';


@Component({
  selector: 'singlepost',
  templateUrl: './singlepost.component.html',
  styles: [`h1 { font-family: Lato; color: blue; }`],
  providers: [SinglePostService]

})
export class SinglePostComponent  {

  singlepost;

  constructor(private singlepostsService: SinglePostService) {
   
  }

  getSingle(){
   this.singlepostsService.getSinglePost()
      .toPromise()
      .then((response) => {
        console.log(response);
        this.singlepost = Array.of(response[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }


}
