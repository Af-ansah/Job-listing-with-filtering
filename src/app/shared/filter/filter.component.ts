import { Component, Input, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { Observable, catchError, combineLatest, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent  implements OnInit{

 
    filterData = toSignal(combineLatest([
      this.dataservice.roles,
      this.dataservice.levels,
      this.dataservice.languages
    ]).pipe(
      map(([roles, levels, languages]) => [...roles, ...levels, ...languages]
      ),catchError(
        error => {throw new Error(error)}
        
      ))
    );

    
    //filterData = signal([])
  
  
 constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    
  }
  
  

  // Method to clear the array
  clearJobsFilter(){
    this.dataservice.clearFilters();
    
  }

}


