import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload/file-upload.component';

// import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    TestComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
