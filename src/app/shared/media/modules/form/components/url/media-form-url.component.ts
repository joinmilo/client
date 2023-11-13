import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, Subject, filter, of, switchMap, takeUntil } from 'rxjs';
import { MediaEntity } from 'src/app/core/api/generated/schema';
import { mediaMimeTypeApi } from 'src/app/core/constants/url.constants';
import { MediaService } from 'src/app/shared/media/services/media.service';

@Component({
  selector: 'app-media-form-url',
  templateUrl: './media-form-url.component.html',
  styleUrls: ['./media-form-url.component.scss'],
})
export class MediaFormUrlComponent implements OnDestroy {

  @Output()
  public back = new EventEmitter<void>();

  public control = new FormControl<string>('');

  public isYoutube = false;

  public media?: MediaEntity;

  private destroy = new Subject<void>();

  constructor(
    private mediaService: MediaService,
    private httpClient: HttpClient
  ) {
    this.control.valueChanges
      .pipe(
        filter(value => this.mediaService.isValidUrl(value)),
        switchMap(url => {
          const youtubeUrl = this.mediaService.parseYoutubeUrl(url);
          return youtubeUrl
            ? of({
                url: youtubeUrl ?? url,
                mimeType: 'video/mp4'
              })
            : this.httpClient.post(mediaMimeTypeApi, url, { responseType: 'text' })
              .pipe(
                switchMap(mimeType => mimeType
                  ? of ({
                      url,
                      mimeType
                    })
                  : EMPTY
                )
              )

        }),
        takeUntil(this.destroy)
      ).subscribe(media => this.media = media)
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}