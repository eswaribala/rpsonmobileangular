import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn:'root'
})
export class AuthService {
  constructor(private router: Router) { }
  sendToken(token: string) {
    sessionStorage.setItem('LoggedInUser', token);
  }
  getToken() {
    return sessionStorage.getItem('LoggedInUser');
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    sessionStorage.removeItem('LoggedInUser');
    this.router.navigate(['/Login']);
  }
  isAdminUser(): boolean {
    if (this.getToken() !== null) {
      return true;
    }
    return false;
  }
}
