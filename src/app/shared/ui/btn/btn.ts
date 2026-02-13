import { Component, computed, input } from '@angular/core';
import { IconComponent } from '../icon/icon';

type ButtonVariant = 'primary' | 'danger' | 'outline' | 'ghost';

@Component({
  selector: 'app-btn',
  imports: [IconComponent],
  templateUrl: './btn.html',
  styleUrl: './btn.scss',
})
export class Btn {
  label = input<string>('');
  variant = input<ButtonVariant>('primary');
  icon = input<string>('');
  loading = input<boolean>(false);
  disabled = input<boolean>(false);
  type = input<'button' | 'submit'>('button');

  baseClasses = computed(() => {
    const base =
      'flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

    switch (this.variant()) {
      case 'primary':
        return `${base} bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200`;
      case 'danger':
        return `${base} bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-red-200`;
      case 'outline':
        return `${base} border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 bg-transparent`;
      case 'ghost':
        return `${base} bg-gray-100 text-gray-700 hover:bg-gray-200`;
      default:
        return base;
    }
  });
}
