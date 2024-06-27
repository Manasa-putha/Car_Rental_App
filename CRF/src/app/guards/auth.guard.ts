import { CanActivateFn } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup';
import { ToastService } from '../services/toast.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth : AuthService,
    private router: Router,
    private toastservice: ToastService){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.toastservice.showError("ERROR", "Please Login First!");
      this.router.navigate(['login'])
      return false;
    }
  }
}