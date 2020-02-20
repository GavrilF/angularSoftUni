import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  user$: Observable<IUser>;
  constructor(public userService: AuthService) { 
  }
  
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
  }
  ngOnInit(): void {
    this.user$ = this.userService.user$
    
  }

}
