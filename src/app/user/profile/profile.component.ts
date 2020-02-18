import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser;
  constructor(private userService: AuthService) {
    this.userService.getUserData().subscribe((user) => this.currentUser = user)
   }

  ngOnInit(): void {
  }

}
