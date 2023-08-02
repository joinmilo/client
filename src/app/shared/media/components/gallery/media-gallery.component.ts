import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaDisplayType } from 'src/app/core/typings/filter-params/media-display';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { MediaViewerData } from 'src/app/shared/media/typings/media';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { MediaViewerComponent } from '../viewer/media-viewer.component';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class MediaGalleryComponent implements OnInit, OnChanges {

  @Input()
  public backLabel?: string = 'back';

  @Input()
  public backRoute?: string[];

  @Input()
  public media?: Maybe<MediaEntity[]>;

  public files?: MediaEntity[];
  public images?: MediaEntity[];
  public videos?: MediaEntity[];

  public fileType = MediaDisplayType.Image;

  public inputs?: RadioInput[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router,
  ) { }

  public ngOnInit(): void {
    this.init();
  }

  ngOnChanges(): void {
    this.init();
  }

  private init(): void {
    this.inputs = [];
    this.files = [];
    this.images = [];
    this.videos = [];

    if (this.media?.length) {
      this.media?.forEach(element => {
        if (element) {
          if (element?.mimeType?.includes('image')) {
            this.images?.push(element);
          } else if (element?.mimeType?.includes('video')) {
            this.videos?.push(element);
          } else {
            this.files?.push(element);
          }
        }
      });
    }

    if (this.images?.length) {
      this.inputs.push({
        icon: ['fas', 'image'],
        label: 'images',
        value: MediaDisplayType.Image
      });
    }

    if (this.videos?.length) {
      this.inputs?.push({
        icon: ['fas', 'video'],
        label: 'videos',
        value: MediaDisplayType.Video
      })
    }

    if (this.files?.length) {
      this.inputs?.push({
        icon: ['fas', 'file'],
        label: 'files',
        value: MediaDisplayType.File
      });
    }
  }

  public routeBack(): void {
    this.backRoute
      ? this.router.navigate(this.backRoute)
      : this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  public openViewer(index: number, media?: Maybe<Maybe<MediaEntity>[]>): void {
    this.dialog.open(MediaViewerComponent, {
      data: {
        media: media,
        currentIndex: index
      } as MediaViewerData,
      panelClass: 'media-dialog',
      autoFocus: false,
    });
  }

}
