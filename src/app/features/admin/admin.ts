import { Btn } from './../../shared/ui/btn/btn';
import { AuthService } from './../../core/services/auth';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeavyChartComponent } from './components/heavy-chart/heavy-chart';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Btn,HeavyChartComponent],
  templateUrl: './admin.html'
})
export class AdminComponent {
  auth = inject(AuthService);
  router = inject(Router);

  onLogout() {
    this.auth.logOut();
    this.router.navigate(['/login']);
  }
}