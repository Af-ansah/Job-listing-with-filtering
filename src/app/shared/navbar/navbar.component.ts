import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [FilterComponent, CommonModule]
})
export class NavbarComponent {
    isVisible = false;
    visiblecard: Subscription;
    constructor(private dataservice: DataService) {
        this.visiblecard = this.dataservice.visibleSource.subscribe(visible => {
        this.isVisible = visible;})
      } 
      ngOnDestroy() {
        this.visiblecard.unsubscribe();
      }
 }

