import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuth;
  currentUser;
  constructor(private userService: AuthService) { 
    this.isAuth = this.userService.isAuth()
    
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe((user) => this.currentUser = user)
  }
  sidebarToggle(){
    
  }
  
}
