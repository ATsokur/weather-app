import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { StorageService } from './services/storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public authenticationService = inject(AuthenticationService);
  public readonly storageService = inject(StorageService);
  public readonly isEnterUser: boolean = false;


  constructor() { }


}
