import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {

  currentUser;
  constructor(private userService: AuthService) { 
    
    this.userService.getUserData().subscribe((user) => this.currentUser = user)
  }

  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
}
  ngOnInit(): void {
    
    
  }

}
