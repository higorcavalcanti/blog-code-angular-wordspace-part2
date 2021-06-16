import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule,
})
export class AuthService {

  readonly endpoint = 'https://reqres.in/api/login';

  constructor(
    public http: HttpClient
  ) { }

  login(username: string, password: string) {
    return this.http.post(this.endpoint, {
      username, password
    });
  }
}
