import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';

@Component({
  selector: 'app-portal-favorites',
  templateUrl: './portal-favorites.component.html',
  styleUrls: ['./portal-favorites.component.scss']
})
export class PortalFavoritesComponent {

  public displayType = 'events';

  public displayQueryParam = displayQueryParam;

  public inputs: RadioButtonInput[] = [
    {
      style: 'fas',
      icon: 'fa-calendar',
      label: 'Events',
      value: 'events'
    },
    {
      style: 'fas',
      icon: 'fa-tags',
      label: 'Deals',
      value: 'deals'
    },
    {
      style: 'fas',
      icon: 'fa-people-group',
      label: 'Organisations',
      value: 'organisations'
    },
    {
      style: 'fas',
      icon: 'fa-newspaper',
      label: 'Articles',
      value: 'articles'
    },
    {
      style: 'fas',
      icon: 'fa-pen-fancy',
      label: 'Authors',
      value: 'authors'
    },
  ];

constructor(
  public store: Store
) { }
}