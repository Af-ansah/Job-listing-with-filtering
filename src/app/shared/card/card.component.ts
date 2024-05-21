import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IJob } from '../../interfaces/jobs.interface';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe'
import { ButtonComponent } from '../button/button.component';




@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  job!: IJob;


  @Output() selectFilter = new EventEmitter<{type:  'role' | 'level' | 'language', event: string}>();
  

  addSkill(type:  'role' | 'level' | 'language', event: string) {
    this.selectFilter.emit({type, event});
  }
}
 