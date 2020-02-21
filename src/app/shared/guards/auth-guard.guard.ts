import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,private router: Router){}

  canActivate(){
    if(!this.authService.getAuthStatus()){
      this.router.navigate(['login'])
      return false
    }
    return true
  }
  canLoad(){
    if(!this.authService.getAuthStatus()){
      this.router.navigate(['login'])
      return false
    }
    return true
  }
}
