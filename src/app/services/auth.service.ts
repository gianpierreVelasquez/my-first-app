import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReqBodyPostLogin } from '../schema/auth';
import { Auth } from '../models/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _http: HttpClient) {}

  login(obj: Auth): Observable<any> {
    return this._http.post(`${environment.baseUrl}/account/auth`, ReqBodyPostLogin.create(obj));
  }
}
