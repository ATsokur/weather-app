import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {
  public authenticationForm: FormGroup;
  public loginControl = new FormControl('', []);
  public passwordControl: FormControl = new FormControl('', []);
  public loginInput: string;
  public passwordInput: string;
  public hasAuthenticationError: boolean = false;
  public authenticationService = inject(AuthenticationService);
  public isLoggedUser: boolean = false;


  ngOnInit() {
    this.initAuthenticationForm();
    this.takeLoginInput();
    this.takePasswordInput();
  }

  public takeLoginInput() {
    this.authenticationForm.get('login')!.valueChanges.subscribe(value => {
      this.loginInput = value;
    });
  }

  public takePasswordInput() {
    this.authenticationForm.get('password')!.valueChanges.subscribe(value => {
      this.passwordInput = value;
    });
  }

  public initAuthenticationForm() {
    this.authenticationForm = new FormGroup({
      login: this.loginControl,
      password: this.passwordControl,
    });
  }

  toEnterInAccount() {
    this.takeLoginInput();
    console.log('Login: ', this.loginInput);
    this.takePasswordInput();
    console.log('Password: ', this.passwordInput);
    this.isLoggedUser = this.authenticationService.isUserLoggedIn(this.loginInput, this.passwordInput);
    console.log('authService.enterUser.value', this.authenticationService.isLogginIn$.value);
    if(!this.isLoggedUser) {
      this.hasAuthenticationError = true;
    }
  }
}



