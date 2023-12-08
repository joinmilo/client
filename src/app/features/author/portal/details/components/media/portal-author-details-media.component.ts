import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { MediaDisplayType } from 'src/app/core/typings/filter-params/media-display';
import { RadioButtonInput } from 'src/app/shared/form/radio-button/typings/radio-button-input';
import { PortalAuthorDetailsActions } from '../../state/portal-author-details.actions';
import { selectAuthorMedia } from '../../state/portal-author-details.selectors';

@Component({
  selector: 'app-portal-author-details-media',
  templateUrl: './portal-author-details-media.component.html',
  styleUrls: ['./portal-author-details-media.component.scss']
})
export class PortalAuthorDetailsMediaComponent implements OnDestroy {

  public fileType = MediaDisplayType.Image;

  private destroy = new Subject<void>();

  public inputs: RadioButtonInput[] = [
    {
      style: 'fas',
      icon: 'fa-image',
      label: 'images',
      value: MediaDisplayType.Image
    },
    {
      style: 'fas',
      icon: 'fa-video',
      label: 'videos',
      value: MediaDisplayType.Video
    },
    {
      style: 'fas',
      icon: 'fa-file',
      label: 'files',
      value: MediaDisplayType.File
    }
  ];

  public media = this.store.select(selectAuthorMedia);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalAuthorDetailsActions.getDetails(params.get(slug) || '')));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
