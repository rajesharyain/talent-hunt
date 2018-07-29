import { CarouselComponent } from './../../carousel/carousel.component';
import { Image } from './../../carousel/image';
import { DataService } from './../../data.service';
import { Component, OnInit, NgModule, Input } from '@angular/core';

var imageData:Image[]=[
      { "title": "We are covered", "url": "../../assets/img/covered.jpg" },
      { "title": "Generation Gap", "url": "../../assets/img/generation.jpg" },
      { "title": "Potter Me", "url": "../../assets/img/potter.jpg" },
      { "title": "Pre-School Kids", "url": "../../assets/img/preschool.jpg" },
      { "title": "Young Peter Cech", "url": "../../assets/img/soccer.jpg" }
      
];

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
  
})
export class BirthdayComponent implements OnInit {
 // private imagesList;
  //public imagesList:any;
    imagesList:any;
  constructor() { 
   //this.dataService.setImageData(imageData);
   //this.imagesList = this.dataService.getImageData();
  }

  ngOnInit() {
    this.imagesList = imageData;
  }
 
  
  
  

}
