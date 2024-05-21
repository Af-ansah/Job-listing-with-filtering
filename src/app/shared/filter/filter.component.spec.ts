import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { of } from 'rxjs';
import { DataService } from '../../data.service';





describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  let mockDataService: MockDataService; 

  class MockDataService {
    clearFilters = jasmine.createSpy('clearFilters');
    roles = of(['Frontend', 'Fullstack']);
    levels = of(['Senior', 'Junior']);
    languages = of(['Javascript', 'python']);
    removeFilter = jasmine.createSpy('removeFilter');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    mockDataService = TestBed.inject(DataService) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear all filters when clearJobsFilter is called', () => {
    component.clearJobsFilter();
    expect(mockDataService.clearFilters).toHaveBeenCalled();
  });

  // Additional test to check removal of a specific filter
  it('should call removeFilter on DataService when onRemoveFilter is called', () => {
    const filterType = 'role';
    const filterValue = 'Admin';
    component.onRemoveFilter(filterType, filterValue);
    expect(mockDataService.removeFilter).toHaveBeenCalledWith(filterType, filterValue);
  });

    
  });



