import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  if (authenticationService.isLogginIn$.value === false) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};







