import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { displayQueryParam } from 'src/app/core/constants/core.constants';
import { MapEntityFilter } from 'src/app/core/typings/filter-params/map-filter-param';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { MapComponent } from 'src/app/shared/map/components/map.component';
import { Maybe } from 'src/schema/schema';
import { MapFeatureActions } from '../state/portal-map-overview.actions';
import { selectActiveEntityFilter, selectResult } from '../state/portal-map-overview.selector';

@Component({
  selector: 'app-portal-map-overview',
  templateUrl: './portal-map-overview.component.html',
  styleUrls: ['./portal-map-overview.component.scss'],
})
export class PortalMapOverviewComponent{

  public markers = this.store.select(selectResult);

  public entityType = this.store.select(selectActiveEntityFilter)
    .pipe(take(1));

  public entityQueryParam = displayQueryParam;

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'calendar'],
      label: 'activities',
      value: MapEntityFilter.Events
    },
    {
      icon: ['fas', 'people-group'],
      label: 'organisations',
      value: MapEntityFilter.Organisations
    },
    {
      icon: ['fas', 'tags'],
      label: 'deals',
      value: MapEntityFilter.Deals
    },
  ];

  @ViewChild(MapComponent)
  private map?: MapComponent;

  constructor(
    private store: Store,
  ) { }

  public updateEntityFilter(entityType?: Maybe<MapEntityFilter>) {
    if (entityType) {
      this.store.dispatch(MapFeatureActions.setEntityFilter(entityType));
    }
  }

  public menuToggled(): void {
    // See: https://stackoverflow.com/questions/53796791/resize-sidenav-content-when-toggle-sidenav-with-material-angular-and-leaflet
    // TODO: try openedChange, maybe its fired after animation is done or trigger rerender during animation
    this.map?.rerender();
  }
}
