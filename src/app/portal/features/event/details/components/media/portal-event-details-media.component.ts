import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/core.constants';
import { MediaDisplayType } from 'src/app/core/typings/filter-params/media-display';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { MimeTypeDefinition } from 'src/app/shared/media/typings/media';
import { mimeTypeDefinition } from 'src/app/shared/media/utils/media.utils';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { PortalEventDetailsActions } from '../../state/portal-event-details.actions';
import { selectEventMedia } from '../../state/portal-event-details.selectors';

@Component({
  selector: 'app-portal-event-details-media',
  templateUrl: './portal-event-details-media.component.html',
  styleUrls: ['./portal-event-details-media.component.scss']
})
export class PortalEventDetailsMediaComponent implements OnDestroy {

  public fileType = MediaDisplayType.Image;

  private destroy = new Subject<void>();

  public inputs: RadioInput[] = [
    {
      icon: ['fas', 'image'],
      label: 'images',
      value: MediaDisplayType.Image
    },{
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

  public media = this.store.select(selectEventMedia);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        PortalEventDetailsActions.getDetails(params.get(slug) || '')));
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return mimeTypeDefinition(element);
  }

}
