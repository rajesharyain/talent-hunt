import { LearnService } from './services/learn.service';
import { DataService } from './data.service';
import { APP_ROUTES } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BirthdayComponent } from './decor/birthday/birthday.component';
import { XMasComponent } from './decor/x-mas/x-mas.component';
import { CateringComponent } from './decor/catering/catering.component';
import { WeddingComponent } from './decor/wedding/wedding.component';
import { GalleryComponent } from './decor/gallery/gallery.component';
import { LearnComponent } from './decor/learn/learn.component';
import { LearnActivityDetailsComponent } from './decor/learn/learn-activity-details/learn-activity-details.component';
import { SchedulereComponent } from './schedulere/schedulere.component';
import { ScheduleCardComponent } from './schedule-card/schedule-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    PageNotFoundComponent,
    BirthdayComponent,
    XMasComponent,
    CateringComponent,
    WeddingComponent,
    GalleryComponent,
    LearnComponent,
    LearnActivityDetailsComponent,
    SchedulereComponent,
    ScheduleCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [DataService, LearnService],
  bootstrap: [AppComponent],
})
export class AppModule { }
