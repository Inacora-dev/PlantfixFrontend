import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpTokenService } from '../../auth/services/http-token.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  backendErrors: { [key: string]: string[] } = {};
  user: any | null = null;

  constructor(
    private svc: HttpTokenService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
      role: ['user']
    });

    this.svc.getUser().subscribe({
      next: (user) => {
        this.user = user;
        this.router.navigate(['/home']);
      },
      error: () => {
      }
    });
  }

  onSubmit(): void {
    this.backendErrors = {};

    const payload = this.registerForm.value;

    this.svc.getCsrfCookie()
      .pipe(
        switchMap(() => this.svc.register(payload))
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          if (err.status === 422 && err.error.errors) {
            this.backendErrors = err.error.errors;
          } else {
            console.error('Unexpected error:', err);
          }
        }
      });
  }
}
