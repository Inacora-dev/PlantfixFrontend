import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpTokenService } from '../../auth/services/http-token.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  backendErrors: { [key: string]: string[] } = {};
  loginForm!: FormGroup;
  user: any | null = null;

  constructor(
    private svc: HttpTokenService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
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
    const { email, password } = this.loginForm.value;

    this.svc.getCsrfCookie().subscribe({
      next: () => {
        this.svc.login(email, password).subscribe({
          next: () => {
            this.svc.getUser().subscribe({
              next: (user) => {
                this.user = user;

                sessionStorage.setItem('role', user.role);

                this.router.navigate(['/home']);
              },
              error: () => {
                this.backendErrors = {
                  general: ['Failed to obtain user information']
                };
              }
            });
          },
          error: (err) => {
            if (err.status === 422 && err.error?.errors) {
              this.backendErrors = err.error.errors;
            } else {
              this.backendErrors = {
                general: [err.error?.message || 'An unexpected error occurred']
              };
            }
          }
        });
      },
      error: () => {
        this.backendErrors = {
          general: ['Failed to obtain CSRF token']
        };
      }
    });
  }
}