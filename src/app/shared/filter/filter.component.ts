import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent  implements OnInit{
  filterData!: Observable<string[]>
showFilterCard: any;
  
 constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.filterData = this.dataservice.filterData
  }

  // Method to clear the array
  clearJobsFilter(){
    
    
  }
}
