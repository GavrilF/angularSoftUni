import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/IUser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user$: Observable<IUser>
  constructor(public userService: AuthService) {
  }
  
  ngOnInit(): void {
    
    this.user$ = this.userService.user$;
  }

}
