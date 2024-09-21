import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})

export class LoadingComponent {
  readonly mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  @Input() color: string = 'primary';

}
