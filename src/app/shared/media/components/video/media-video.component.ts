import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { isValidYoutubeUrl, urlParser } from '../../utils/media.utils';
import { Store } from '@ngrx/store';
import { selectConsentForExternalContent } from 'src/app/core/state/selectors/user.selectors';


@Component({
  selector: 'app-media-video',
  templateUrl: './media-video.component.html',
  styleUrls: ['./media-video.component.scss'],
})
export class MediaVideoComponent implements OnChanges {

  @Input()
  public media?: Maybe<MediaEntity>;

  public videoElement?: HTMLVideoElement;

  @ViewChild('video') set elementRef(content: ElementRef) {
    if (content) {
      this.videoElement = content.nativeElement;
    }
  }

  public isYoutube = false;

  public url?: SafeResourceUrl;

  public allowExternalContent = this.store.select(selectConsentForExternalContent);

  constructor(
    private sanitizer: DomSanitizer,
    private store: Store) { }

  public ngOnChanges(): void {
    this.isYoutube = isValidYoutubeUrl(this.media?.url);

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.media?.url as string);
    if (this.videoElement) {
      this.videoElement.load();
    }
  }

  public getHostname(){
    return urlParser(this.media?.url);
  }
}
