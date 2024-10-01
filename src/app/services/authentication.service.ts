import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


export const USERS: User[] = [
  {
    id: '1',
    login: 'user1',
    password: 'password1',
  },
  {
    id: '2',
    login: 'user2',
    password: 'password2',
  },
  {
    id: '3',
    login: 'user3',
    password: 'password3',
  },
]

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public isLogginIn$ = new BehaviorSubject<boolean>(false);
  private readonly storageService = inject(StorageService);
  private userName: string;
  private router = inject(Router);


  constructor() {
    this.autoSignIn();
  }


  autoSignIn() {
    if (this.storageService.getAuthenticationData()) {
        this.isLogginIn$.next(true);
        this.userName = USERS.find((el) => el['id'] === localStorage.getItem('id'))!.login;
    }
  }

  isUserLoggedIn(login: string, password: string) {
    let userLogin: string = USERS.find((el) => el['login'] === login)?.login as string;
    let userPassword: string = USERS.find((el) => el['password'] === password)?.password as string;
     userLogin && userPassword ? this.isLogginIn$.next(true) : this.isLogginIn$.next(false);
    if(this.isLogginIn$.value) {
      let userId: string = USERS.find((el) => el['login'] === userLogin)!.id;
      localStorage.setItem('id', userId);
      this.userName = userLogin;
      this.storageService.setAuthenticationData();
      this.router.navigate(['/welcome']);
    }
    console.log(this.isLogginIn$.value ? 'Пользователь авторизовался' : 'Пользователь не авторизовался');
    return this.isLogginIn$.value;
  }

  isUserLoggedOut() {
    this.storageService.cleanAll();
    localStorage.removeItem('id');
    this.isLogginIn$.next(false);
    this.router.navigate(['/login']);
    console.log(this.isLogginIn$.value ? 'Пользователь не вышел из учетной записи' : 'Пользователь вышел из учетной записи');
  }

  getUserName() {
    return this.userName;
  }
}


