import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { Auth } from 'src/app/models/auth.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormProvider } from 'src/utils/AuthFormProvider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  loginForm!: FormGroup;

  private _subs: Subscription[] = [];

  constructor(
    private readonly _AuthFormProvider: AuthFormProvider,
    private readonly _AuthService: AuthService,
    private readonly _Router: Router
  ) {}

  ngOnInit() {
    this._initValues();
  }

  public goToHome() {
    this._Router.navigate(['/main/home'])
  }

  public submitLogin(form: FormGroup) {
    if (form.invalid) {
      form.markAsDirty();
    } else {
      this._subs.push(
        this._AuthService.login(form.value)
          .subscribe((val) => {
            console.log(val);
          })
      );
    }
  }

  private _initValues() {
    this.loginForm = this._AuthFormProvider.LoginForm();
  }

  ngOnDestroy(): void {
    this._subs.forEach((s) => s.unsubscribe());
  }
}
