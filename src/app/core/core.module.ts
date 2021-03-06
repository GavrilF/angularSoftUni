import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



// import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CarouselModule,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
