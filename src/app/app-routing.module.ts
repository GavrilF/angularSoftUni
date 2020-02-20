import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './auth/login/login.component';

import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';

import { DownloadComponent } from './download/download.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: "posts",
    loadChildren: () => import("./posts/posts.module").then(m => m.PostsModule)
  },
  {
    path: "profile",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: 'download',
    component: DownloadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regiser',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
