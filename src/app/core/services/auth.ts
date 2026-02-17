import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  currentUser=signal<{name:string;role:string} | null>(null)
  
  login(){
    this.currentUser.set({name:'username',role:'admin'})
  }
  logOut(){
    this.currentUser.set(null)
  }

 get isLoggedIn() {
    return !!this.currentUser();
  }
}
