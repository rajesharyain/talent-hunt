import { BirthdayComponent } from './../decor/birthday/birthday.component';
import { WeddingComponent } from './../decor/wedding/wedding.component';
import { DataService } from './../data.service';
import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Image } from './image';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[DataService]
})

export class CarouselComponent implements OnInit {
  
  @Input() imagesList:any;
  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) { 
   
   //console.log(this.router.url)
  }
  
  ngOnInit() {
    //this.imagesList = this.dataService.getImageData();
  }



}

//IMAGES array implementing Image interface

var imageData:Image[]=[
      { "title": "We are covered", "url": "../../assets/img/covered.jpg" },
      { "title": "Generation Gap", "url": "../../assets/img/generation.jpg" },
      { "title": "Potter Me", "url": "../../assets/img/potter.jpg" },
      { "title": "Pre-School Kids", "url": "../../assets/img/preschool.jpg" },
      { "title": "Young Peter Cech", "url": "../../assets/img/soccer.jpg" }
];