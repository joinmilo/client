import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Store } from '@ngrx/store';
import { PageActions } from '../../state/page.actions';
import { selectCurrentPage } from '../../state/page.selectors';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss']
})
export class PageLandingComponent {

  public page = this.store.select(selectCurrentPage);

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 60;
  bufferValue = 75;

  constructor(
    private store: Store,
  ) {
    this.store.dispatch(PageActions.getLandingPage());
  }
}
