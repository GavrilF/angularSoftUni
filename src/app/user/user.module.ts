import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    LoginComponent,
    ProfileSettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule

  ]
})
export class UserModule { }
