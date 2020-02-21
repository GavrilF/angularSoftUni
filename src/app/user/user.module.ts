import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    ProfileSettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    UserRoutingModule,
    SharedModule

  ]
})
export class UserModule { }
