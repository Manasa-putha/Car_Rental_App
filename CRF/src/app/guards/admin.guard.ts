
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastservice: ToastService
  ) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role');
    if (role === 'Admin') {
      return true;
    } else {
      this.toastservice.showError("ERROR", "Only Admin can access this page!");
      this.router.navigate(['not-authorized']);
      return false;
    }
  }
}
