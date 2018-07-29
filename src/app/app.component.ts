import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NESTOR DECOR';
  public imageData: Array<any> | boolean = false;
  constructor(public dataService:DataService){
    //dataService.getImageData();
  }

}
