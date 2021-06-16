import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'lib-name/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: null,
      password: null,
    });
  }

  login() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    this.authService.login(username, password).subscribe(
      response => console.log('success', response),
      error => console.log('error', error)
    );
  }
}
