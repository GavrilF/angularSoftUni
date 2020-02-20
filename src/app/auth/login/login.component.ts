import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public userService: AuthService) { }
  
  handleLogin(formInput: HTMLFormElement){
    this.userService.signInWithEmail(formInput.email,formInput.password)
  }
  ngOnInit(): void {
  }

}
