import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../user/login/login.component';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuth;
  currentUser;
  constructor(private modalService: NgbModal,private userService: AuthService) { 
    this.isAuth = this.userService.isAuth()
    this.userService.getUserData().subscribe(user => this.currentUser = user)
  }

  ngOnInit(): void {
  }
  sidebarToggle(){
    
  }
  
}
