import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [FilterComponent]
})
export class NavbarComponent {

}
