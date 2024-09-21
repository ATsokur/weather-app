import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  @Input() text: string = 'Сохранить';
  @Input() toggledText: string = 'Сохранено';
  @Input() set toggleValue(value: boolean) {
    this.toggled = value;
  }

  @Output() toggleChangeEvent = new EventEmitter<boolean>();

  toggled: boolean = false;

  toggle() {
    this.toggled = !this.toggled;
    this.toggleChangeEvent.emit(this.toggled);
  }

  constructor() {}
}
