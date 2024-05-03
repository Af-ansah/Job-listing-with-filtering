import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input({
  required: true 
})
buttonName: string = '';

@Input() 
variant: 'primary' | 'secondary' | 'tertiary' | 'filter'= 'primary'

}
