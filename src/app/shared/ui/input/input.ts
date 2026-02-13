import { IconComponent } from '../../../shared/ui/icon/icon';
import { Component, input, forwardRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // --- INPUTLAR (Tashqaridan keladigan) ---
  label = input<string>('');
  placeholder = input<string>('');
  type = input<string>('text'); // text, password, email...
  icon = input<string>(''); // Icon nomi
  error = input<string>(''); // Xatolik matni
  disabled = input<boolean>(false);
  // --- ICHKI HOLAT ---
  value = signal(''); // Input ichidagi yozuv
  isDisabled = signal(false);

  // --- CVA FUNKSIYALARI (Angular uchun) ---
  // Bu funksiyalar bo'sh turadi, Angular o'zi ularni to'ldiradi
  onChange: any = () => {};
  onTouch: any = () => {};

  // 1. Angular modeldan qiymat yuborganda ishlaydi (Write)
  writeValue(val: string): void {
    this.value.set(val || '');
  }

  // 2. Foydalanuvchi yozganda ishlaydi (Read)
  onInput(val: string) {
    this.value.set(val);
    this.onChange(val); // Angularga xabar beramiz
    this.onTouch();
  }
  // 3. Register funksiyalari (Standart)
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
