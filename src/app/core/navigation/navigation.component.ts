import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  user$: Observable<IUser>
  constructor(private authService: AuthService) {
    this.user$ = authService.user$;
  }

  ngOnInit(): void {
 
  }

  signOut(){
    this.authService.signOut()
  }
  sidebarToggle(){
    
  }
  
}
