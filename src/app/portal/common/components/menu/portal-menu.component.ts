import { Component } from '@angular/core';

@Component({
  selector: 'app-portal-menu',
  templateUrl: './portal-menu.component.html',
  styleUrls: ['./portal-menu.component.scss'],
})
export class PortalMenuComponent { 

  showSearch = false;

  value = '';

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}