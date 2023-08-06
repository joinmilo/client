import { Component, ElementRef, Input, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectAllowExternalContent } from 'src/app/core/state/selectors/user.selectors';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { getUrlHost, isValidYoutubeUrl } from '../../utils/media.utils';


@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.scss'],
})
export class MediaVideoComponent implements OnChanges, OnDestroy {

  @Input()
  public media?: Maybe<MediaEntity>;

  public allowExternalContent?: boolean;

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
    private sanitizer: DomSanitizer,
    private store: Store) {
      this.store.select(selectAllowExternalContent)
        .pipe(takeUntil(this.destroy))
        .subscribe(allowed => this.allowExternalContent = allowed);
    }

  public ngOnChanges(): void {
    this.isYoutube = isValidYoutubeUrl(this.media?.url);

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.media?.url as string);
    if (this.videoElement) {
      this.videoElement.load();
    }
  }

  public getHostname(): string {
    return getUrlHost(this.media?.url as string);
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
