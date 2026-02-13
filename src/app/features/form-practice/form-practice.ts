import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-practice',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-practice.html',
  styleUrl: './form-practice.scss',
})
export class FormPracticeComponent {
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    agree: [false, Validators.requiredTrue],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log('form malumotlari', this.form.value);

    this.form.reset();
  }

  get f() {
    return this.form.controls;
  }
}
