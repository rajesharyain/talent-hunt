import { Image } from './carousel/image';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  public imageData: Array<any> | boolean = false;
  constructor() { }

  public getImageData(): Array<any> | boolean {
        return this.imageData;
    }

    public setImageData(imageData: any): void {
        this.imageData = imageData;
    }

    public dateInfo: any = {
        year: 2016
    }
    
  
}




