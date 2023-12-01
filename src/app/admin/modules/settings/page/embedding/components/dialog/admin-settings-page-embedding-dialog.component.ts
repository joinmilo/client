import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminSettingsPageEmbeddingActions } from '../../state/admin-settings-page-embedding.actions';
import { selectWidgetTypes } from '../../state/admin-settings-page-embedding.selectors';

@Component({
  selector: 'app-admin-settings-page-embedding-dialog',
  templateUrl: './admin-settings-page-embedding-dialog.component.html',
  styleUrls: ['./admin-settings-page-embedding-dialog.component.scss'],
})
export class AdminSettingsPageEmbeddingDialogComponent {

  public options = this.store.select(selectWidgetTypes);

  constructor(
    private store: Store
  ) {
    this.store.dispatch(AdminSettingsPageEmbeddingActions.getWidgetTypes());
  }
}