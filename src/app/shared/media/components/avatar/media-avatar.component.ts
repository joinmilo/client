import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Maybe, MediaEntity, UserContextEntity } from 'src/app/core/api/generated/schema';

@Component({
  selector: 'app-media-avatar',
  templateUrl: './media-avatar.component.html',
  styleUrls: ['./media-avatar.component.scss'],
})
export class MediaAvatarComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  public user?: Maybe<UserContextEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  public ngOnInit(): void {
    this.initMedia();
  }

  public ngOnChanges(): void {
    this.initMedia();
  }

  private initMedia() {
    this.media = this.user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null;
  }

  public ngAfterViewInit(): void {
    const spanElement = this.elementRef.nativeElement.querySelector('.border-image');
    const spanWidth = spanElement.offsetWidth;

    const fontSize = (spanWidth * 0.025) > 0 ?? 1 + 'em';
    
     this.renderer.setStyle(spanElement, 'font-size', fontSize);
  }
}
