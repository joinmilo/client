import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioButtonInput } from 'ngx-cinlib/forms/radio-button';
import { MediaDisplayType } from 'ngx-cinlib/media/common';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { PortalDealDetailsActions } from '../../state/portal-deal-details.actions';
import { selectDealMedia } from '../../state/portal-deal-details.selectors';

@Component({
  selector: 'app-portal-deal-details-media',
  templateUrl: './portal-deal-details-media.component.html',
  styleUrls: ['./portal-deal-details-media.component.scss']
})
export class PortalDealDetailsMediaComponent implements OnDestroy {

  public fileType = MediaDisplayType.Image;

  private destroy = new Subject<void>();

  public inputs: RadioButtonInput[] = [
    {
      icon: ['fas', 'image'],
      label: 'images',
      value: MediaDisplayType.Image
    },
    {
      icon: ['fas', 'video'],
      label: 'videos',
      value: MediaDisplayType.Video
    },
    {
      icon: ['fas', 'file'],
      label: 'files',
      value: MediaDisplayType.File
    }
  ];

  public media = this.store.select(selectDealMedia);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalDealDetailsActions.getDetails(params.get(slug) || '')));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}


