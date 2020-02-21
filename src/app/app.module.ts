import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Components Imports
import { AppComponent } from './app.component';
import { DownloadComponent } from './download/download.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Modules Imports
import { FirebaseModule } from './firebase-module/firebase-module.module';
import { CoreModule } from './core/core.module';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'




@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    DownloadComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FirebaseModule,
    UserModule,
    PostsModule,
    AuthModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
