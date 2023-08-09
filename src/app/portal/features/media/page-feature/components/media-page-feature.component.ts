import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRecentMedia } from '../state/media-page-feature.selectors';
import { MediaPageFeatureActions } from '../state/media-page-feature.actions';

@Component({
  selector: 'app-media-page-feature',
  templateUrl: './media-page-feature.component.html',
  styleUrls: ['./media-page-feature.component.scss']
})
export class MediaPageFeatureComponent {

  public recentMedia = this.store.select(selectRecentMedia);

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(MediaPageFeatureActions.getRecentMedia());
  }

}
