import { SchedulereComponent } from './schedulere/schedulere.component';
import { LearnActivityDetailsComponent } from './decor/learn/learn-activity-details/learn-activity-details.component';
import { LearnComponent } from './decor/learn/learn.component';
import { GalleryComponent } from './decor/gallery/gallery.component';
import { BirthdayComponent } from './decor/birthday/birthday.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
    { path: '', redirectTo:'learn-activity', pathMatch:'full' },
    { path: 'wedding', component: CarouselComponent },
    { path: 'learn-activity', component: LearnComponent },
    { path: 'learn-activity/:id', component: LearnActivityDetailsComponent},
    { path: 'birthday-party', component: BirthdayComponent },
    { path: 'catering', component: CarouselComponent },
    { path: 'x-mas-party', component: CarouselComponent },
    { path: 'gallery', component: GalleryComponent },
    {path:'admin/event-schedular',component:SchedulereComponent},
    { path: '**', component: PageNotFoundComponent }
]
export const APP_ROUTES = RouterModule.forRoot(appRoutes);