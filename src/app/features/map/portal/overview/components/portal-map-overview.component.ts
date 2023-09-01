import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Maybe } from 'src/app/core/api/generated/schema';
import { displayQueryParam } from 'src/app/core/constants/queryparam.constants';
import { MapEntityFilter } from 'src/app/core/typings/filter-params/map-filter-param';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';
import { MapComponent } from 'src/app/shared/widgets/map/components/map.component';
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

  public inputs: RadioButtonInput[] = [
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
