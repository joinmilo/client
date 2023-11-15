import { Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { selectCookieSettings } from 'src/app/core/state/selectors/user.selectors';
import { MediaService, } from '../../../../services/media.service';

@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.scss'],
})
export class MediaVideoComponent implements OnChanges, OnDestroy {

  @Input()
  public media?: Maybe<MediaEntity>;

  public allowExternalContent?: Maybe<boolean>;

  public videoElement?: HTMLVideoElement;

  @ViewChild('video') set elementRef(content: ElementRef) {
    if (content) {
      this.videoElement = content.nativeElement;
    }
  }

  public isYoutube = false;

  public url?: SafeResourceUrl;

  private destroy = new Subject<void>();

  constructor(
    private mediaService: MediaService,
    private sanitizer: DomSanitizer,
    private store: Store) {
      this.store.select(selectCookieSettings)
        .pipe(takeUntil(this.destroy))
        .subscribe(cookie => this.allowExternalContent = cookie?.externalContent);
    }

  public ngOnChanges(): void {
    this.isYoutube = this.mediaService.isValidYoutubeUrl(this.media?.url);

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.media?.url as string);
    if (this.videoElement) {
      this.videoElement.load();
    }
  }

  public getHostname(): string {
    return this.mediaService.getUrlHost(this.media?.url as string);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
