import { Injectable } from '@angular/core';
import { jobs } from './utilities/constants';
import { IJob } from './interfaces/jobs.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public jobsData = jobs;
  private jobsSubject!: BehaviorSubject<IJob[]>;
  public jobsData!: Observable<IJob[]>;
  private filterSubject: BehaviorSubject<string[]> = new BehaviorSubject([''])
  public filterData =this.filterSubject.asObservable();

  
  constructor() {
    this.jobsSubject = new BehaviorSubject(jobs)
    this.jobsData =  this.jobsSubject.asObservable() 
  }

  addingTofilter(event:string){
     if(!(this.filterSubject?.value as string[]).includes(event)) {
      this.filterSubject.next([...this.filterSubject.value, event])
      this.filterJobsBySkill()
     }
     
  }
  
  filterJobsBySkill(){
    const filteredJobsDataByRole = jobs.filter((job) => this.filterSubject.value.includes(job.role) );
    const filteredJobsDataByLevel = filteredJobsDataByRole.filter((job) => this.filterSubject.value.includes(job.level) );
    console.log(filteredJobsDataByRole)
    console.log(filteredJobsDataByLevel)
    this.jobsSubject.next(filteredJobsDataByLevel)

  }

  public get jobs() {
    return this.jobsSubject.value || []
  }

}
