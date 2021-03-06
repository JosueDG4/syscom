import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../service/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router : Router){}

  canActivate():boolean{
    if(this.auth.isLogged()){
      return true
    }else{
      this.router.navigate(['/loguin'])
      return false
    }
  }
  
}
