import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { City } from '../interfaces/city';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() formGroup: FormGroup;
  @Input() formControl: FormControl;
  @Input() array: any;
  @Input() element: any;
}
