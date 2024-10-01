import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrl: './flat-button.component.css'
})
export class FlatButtonComponent {
  @Input() text: string;
}
