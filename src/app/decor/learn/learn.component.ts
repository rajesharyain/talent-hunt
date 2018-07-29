import { LearnService } from './../../services/learn.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  private learnActivities:any;
  private errorMessage:any;
  private imagesList:any;
  constructor(private learnService:LearnService) { }

  ngOnInit() {
    this.learnService.getLearnActivities().subscribe(
      learnActivities => {
        this.learnActivities = learnActivities;
        this.imagesList = learnActivities[0].images;
        //console.log("hhhhhhhh");
        console.log(this.imagesList)

      },
      error =>  this.errorMessage = <any>error
    )
  }


}
