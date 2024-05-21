import { Injectable } from '@angular/core';
import { jobs } from './utilities/constants';
import { IJob } from './interfaces/jobs.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  
  private jobsSubject!: BehaviorSubject<IJob[]>;
  public jobsData!: Observable<IJob[]>;

  private visibility = new BehaviorSubject<boolean>(false);
  visibleSource = this.visibility.asObservable();
 
//hold an array of roles, levels and language  that should be fltered
  private roleFilterSubject: BehaviorSubject<string[]> = new BehaviorSubject(new Array)
  public roles = this.roleFilterSubject?.asObservable();

  private levelFilterSubject: BehaviorSubject<string[]> = new BehaviorSubject(new Array)
  public levels = this.levelFilterSubject?.asObservable();

  private languageFilterSubject: BehaviorSubject<string[]> = new BehaviorSubject(new Array)
  public languages = this.languageFilterSubject?.asObservable();
  DataService: any;

  
  constructor() {
    this.jobsSubject = new BehaviorSubject(jobs)
    this.jobsData =  this.jobsSubject.asObservable() 

  }
  showFilter(){
    this.visibility.next(true);
  }

  hideFilter() {
    this.visibility.next(false);
  }

    //checks to see if there are any filtered items in the various arrays
  addingTofilter(type:'role'|'level'|'language', event:string){
    const subjects = {
      'role': this.roleFilterSubject,
      'level': this.levelFilterSubject,
      'language': this.languageFilterSubject
   };
  const subject = subjects[type];
    
    if(!(subject?.value as string[]).includes(event)) {
      subject.next([...subject.value, event])
      this.filterJobsBySkill()
     }
    
  }


  removeFilter(type: 'role' | 'level' | 'language', item: string) {
    const subjects = {
      'role': this.roleFilterSubject,
      'level': this.levelFilterSubject,
      'language': this.languageFilterSubject
    };
  
    const subject = subjects[type];
    
    const filteredFilters = subject.value.filter(filter => filter !== item);

    subject.next(filteredFilters);
    this.filterJobsBySkill();
    
  }

  private updateFilter(subject: BehaviorSubject<string[]>, value: string) {
    if (!subject.value.includes(value)) {
      subject.next([...subject.value, value]);
    }
  
  }


  //  display the job listing accordingly
  filterJobsBySkill(){
    let filteredJobs = jobs;
    if (this.roleFilterSubject.value.length) {
      filteredJobs = filteredJobs.filter(job => this.roleFilterSubject.value.includes(job.role));
    }
    if (this.levelFilterSubject.value.length) {
      filteredJobs = filteredJobs.filter(job => this.levelFilterSubject.value.includes(job.level));
    }
    if (this.languageFilterSubject.value.length) {
      filteredJobs = filteredJobs.filter(job => job.languages.some(lang => this.languageFilterSubject.value.includes(lang)));
    }
    this.jobsSubject.next(filteredJobs);
  }

  
  // A methood to cleaar all there arrays of the filtered skills
  clearFilters() {
    this.roleFilterSubject.next([]);
    this.levelFilterSubject.next([]);
    this.languageFilterSubject.next([]);
    this.jobsSubject.next(jobs); 
  }
  
}


