import { Component, signal } from '@angular/core';
import { IconComponent } from '../../shared/ui/icon/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/ui/input/input';
import { Btn } from '../../shared/ui/btn/btn';

@Component({
  selector: 'app-reusable-components',
  imports: [Btn, IconComponent, InputComponent, FormsModule],
  standalone: true,
  templateUrl: './reusable-components.html',
  styleUrl: './reusable-components.scss',
})
export class ReusableComponents {
  isLoading = signal<boolean>(false);

  username = signal('Admin');
  emailError = signal('');

  checkEmail(val: string) {
    if (!val.includes('@')) {
      this.emailError.set("Email noto'g'ri formatda");
    } else {
      this.emailError.set('');
    }
  }

  toggled() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
}
