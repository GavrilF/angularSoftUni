import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PostsModule } from './posts/posts.module';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { TestComponent } from './test/test.component';
import { PostsService } from './shared/services/posts.service';
import { UserModule } from './user/user.module';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

import { DownloadComponent } from './download/download.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactsComponent,
    AboutComponent,
    DownloadComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    UserModule,
    PostsModule,
    AuthModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
