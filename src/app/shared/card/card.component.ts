import { Component, EventEmitter, Input, Output, input } from '@angular/core';
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

  @Output()
  selectSkill = new EventEmitter<string>()

 addSkill(skill:string){
  this.selectSkill.emit(skill);
 }

}
