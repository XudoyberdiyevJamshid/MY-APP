import { Btn } from './../../../shared/ui/btn/btn';
import { AuthService } from './../../../core/services/auth';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Btn],
  template: `
    <div class="flex flex-col items-center justify-center h-screen gap-4">
      <h1 class="text-2xl font-bold">Tizimga kirish</h1>
      <app-btn (click)="onLogin()" label="Admin bo'lib kirish"></app-btn>
    </div>
  `
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);

  onLogin() {
    this.auth.login();
    this.router.navigate(['/admin']); 
  }
}