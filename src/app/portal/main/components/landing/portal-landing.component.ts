import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { PortalMainActions } from '../../state/portal-main.actions';
import { selectCurrentPage } from '../../state/portal-main.selectors';

@Component({
  selector: 'app-portal-landing',
  templateUrl: './portal-landing.component.html',
  styleUrls: ['./portal-landing.component.scss']
})
export class PortalLandingComponent {

  public page = this.store.select(selectCurrentPage);

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 60;
  bufferValue = 75;

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PortalMainActions.getLandingPage());
  }
}
