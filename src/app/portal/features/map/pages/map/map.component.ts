import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MapFeatureActions} from '../../state/map.actions';
import {selectActiveFilter, selectEvents, selectOrganisations} from '../../state/map.selector';
import {FilterKey} from '../../constants/map.constants';

@Component({
  selector: 'app-portal-map-page',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapPageComponent implements OnInit {

  public FilterKey: typeof FilterKey = FilterKey;

  public activeFilter = this.store.select(selectActiveFilter);

  public events = this.store.select(selectEvents);
  public organisations = this.store.select(selectOrganisations)

  constructor(
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(MapFeatureActions.getFilterOptions())
  }

  setFilter(key: FilterKey) {
    this.store.dispatch(MapFeatureActions.setActiveFilter({key}))
  }

}
