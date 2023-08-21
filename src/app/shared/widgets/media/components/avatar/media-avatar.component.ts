import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Maybe, MediaEntity, UserContextEntity } from 'src/schema/schema';

@Component({
  selector: 'app-media-avatar',
  templateUrl: './media-avatar.component.html',
  styleUrls: ['./media-avatar.component.scss'],
})
export class MediaAvatarComponent implements OnInit, AfterViewInit{

  @Input()
  public user?: Maybe<UserContextEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  ngOnInit(): void {
    this.media = this.user?.uploads?.find(upload => upload?.profilePicture)?.media ?? null;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const spanElement = this.elementRef.nativeElement.querySelector('.border-image');
    const spanWidth = spanElement.offsetWidth;

    const fontSize = spanWidth * 0.025 + 'em';
    this.renderer.setStyle(spanElement, 'font-size', fontSize);
  }
}
