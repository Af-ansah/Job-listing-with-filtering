import { Component, Input, OnInit, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../data.service';
import {  catchError, combineLatest, map } from 'rxjs';
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
      map(([roles, levels, languages]) => {
        const rolesValue:{
          type: 'role' | 'level' | 'language',
          filterValue: string
          }[]= roles.map((role) =>{
          return {
            type: 'role',
            filterValue: role
          }
        })
        

        const levelsValue:{
          type: 'role' | 'level' | 'language',
          filterValue: string
          }[] = levels.map((level) =>{
          return {
            type: 'level',
            filterValue: level
          }
        })
        

        const languagesValue :{
          type: 'role' | 'level' | 'language',
          filterValue: string
          }[]= languages.map((language) =>{
          return {
            type: 'language',
            filterValue: language
          }
        })
        return [...rolesValue,...levelsValue,...languagesValue]


      }
      ),catchError(
        error => {throw new Error(error)}
        
      ))
    );

  isVisible = false;
  type!: "role" | "level" | "language" ;
    
  
 constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    
  }
  

  // Method to clear the array
  clearJobsFilter(){
    this.dataservice.clearFilters();
    
  }
 
  //Method to remove filter
  onRemoveFilter(type: 'role' | 'level' | 'language', item: string) {
    this.dataservice.removeFilter(type, item);
  }

}


