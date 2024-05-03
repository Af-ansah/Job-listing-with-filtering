import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNowStrict } from 'date-fns';

@Pipe({
   name: 'timeAgo', 
   standalone: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    return formatDistanceToNowStrict(value, { addSuffix: true });
  }

}
