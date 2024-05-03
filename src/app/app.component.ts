import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardComponent } from './shared/card/card.component';
import { IJob } from './interfaces/jobs.interface';
import { FilterComponent } from './shared/filter/filter.component';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CardComponent, FilterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  jobs!:Observable<IJob[]>
  // showfilterCard = false;

  constructor(private dataService: DataService){
    
  }

  ngOnInit(): void {
    this.jobs = this.dataService.jobsData
  }
  
  addtoFilter(event: string){
    // this.showfilterCard = true;
    this.dataService.addingTofilter(event)
    console.log(event, 'skill')
  }
}
