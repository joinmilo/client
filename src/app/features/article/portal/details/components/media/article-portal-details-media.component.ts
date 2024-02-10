import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RadioButtonInput } from 'ngx-cinlib/forms/radio-button';
import { MediaDisplayType } from 'ngx-cinlib/media/common';
import { Subject, takeUntil } from 'rxjs';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { ArticlePortalDetailsActions } from '../../state/article-portal-details.actions';
import { selectArticleMedia } from '../../state/article-portal-details.selectors';
@Component({
  selector: 'app-article-portal-details-media',
  templateUrl: './article-portal-details-media.component.html',
  styleUrls: ['./article-portal-details-media.component.scss']
})
export class ArticlePortalDetailsMediaComponent implements OnDestroy {

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

  public media = this.store.select(selectArticleMedia);

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
  ) {
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy))
      .subscribe(params => this.store.dispatch(
        ArticlePortalDetailsActions.getDetails(params.get(slug) || '')));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
