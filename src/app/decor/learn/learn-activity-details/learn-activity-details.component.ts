import { LearnService } from './../../../services/learn.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-activity-details',
  templateUrl: './learn-activity-details.component.html',
  styleUrls: ['./learn-activity-details.component.css']
})
export class LearnActivityDetailsComponent implements OnInit {

  constructor(private learnService:LearnService) { }

  ngOnInit() {
    this.getLearnActivityDetails();
  }

  private learnActivities:any;
  private errorMessage:any;
  private imagesList:any;

scheduleData = [
    {
      "date":"2018-07-29 09:30:00",
      "time":"09.30:00",
      "duration":"1 hours",
      "price":"$56",
      "spot":"fursungi"
    },
    {
      "date":"2018-07-29 09:30:00",
      "time":"10.30:00",
      "duration":"1 hours",
      "price":"$56",
      "spot":"fursungi"
    },
    {
      "date":"2018-07-29 09:30:00",
      "time":"11.30:00",
      "duration":"1 hours",
      "price":"$56",
      "spot":"fursungi"
    },
    {
      "date":"2018-07-29 09:30:00",
      "time":"12.30:00",
      "duration":"1 hours",
      "price":"$56",
      "spot":"fursungi"
    }

]
  getLearnActivityDetails() {
    this.learnService.getLearnActivities().subscribe(
      learnActivities => {
        this.learnActivities = learnActivities;
        this.imagesList = learnActivities[0].images;
        //console.log("hhhhhhhh");
        //console.log(this.imagesList)

      },
      error =>  this.errorMessage = <any>error
    )
  }


}
