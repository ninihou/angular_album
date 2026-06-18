import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

function passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

@Component({
  selector: 'app-test-practice',
  imports: [ReactiveFormsModule],
  templateUrl: './test-practice.component.html',
  styleUrl: './test-practice.component.scss',
})
export class TestPracticeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phoneNumber: [''],
        preferredContact: ['Email'],
      },
      { validators: passwordMatchValidator }
    );

    this.form.get('preferredContact')!.valueChanges.subscribe(method => {
      const phone = this.form.get('phoneNumber')!;
      if (method === 'Phone') {
        phone.setValidators(Validators.required);
      } else {
        phone.clearValidators();
      }
      phone.updateValueAndValidity();
    });
  }

  get username() { return this.form.get('username')!; }
  get email() { return this.form.get('email')!; }
  get password() { return this.form.get('password')!; }
  get confirmPassword() { return this.form.get('confirmPassword')!; }
  get phoneNumber() { return this.form.get('phoneNumber')!; }
  get preferredContact() { return this.form.get('preferredContact')!; }

  onSubmit(): void {
    console.log('Form submitted');
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.form.reset({ preferredContact: 'Email' });
    }
  }
}
