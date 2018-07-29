import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'schedule-card',
  templateUrl: './schedule-card.component.html',
  styleUrls: ['./schedule-card.component.css']
})
export class ScheduleCardComponent implements OnInit {

@Input() scheduleData;
  constructor() { }

  ngOnInit() {
  }

}
