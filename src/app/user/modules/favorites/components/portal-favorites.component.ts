import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RadioButtonInput } from 'ngx-cinlib/forms/radio-button';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';

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
      icon: ['fas', 'calendar'],
      label: 'Events',
      value: 'events'
    },
    {
      icon: ['fas', 'tags'],
      label: 'Deals',
      value: 'deals'
    },
    {
      icon: ['fas', 'people-group'],
      label: 'Organisations',
      value: 'organisations'
    },
    {
      icon: ['fas', 'newspaper'],
      label: 'Articles',
      value: 'articles'
    },
    {
      icon: ['fas', 'pen-fancy'],
      label: 'Authors',
      value: 'authors'
    },
  ];

constructor(
  public store: Store
) { }
}