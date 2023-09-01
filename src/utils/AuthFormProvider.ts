import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Injectable()
export class AuthFormProvider {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public LoginForm(): FormGroup {
    return this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
