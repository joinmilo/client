import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaDisplayType } from 'src/app/core/typings/filter-params/media-display';
import { RadioInput } from 'src/app/shared/form/radio-button/typings/radio-input';
import { MediaViewerData, MimeTypeDefinition } from 'src/app/shared/media/typings/media';
import { mimeTypeDefinition } from 'src/app/shared/media/utils/media.utils';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { MediaViewerComponent } from '../viewer/media-viewer.component';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.scss']
})
export class MediaGalleryComponent {

  @Input()
  public backLabel?: string = 'back';

  @Input()
  public backRoute?: string[];

  @Input()
  public set media(media: Maybe<Maybe<MediaEntity | undefined>[] | undefined>) {
    media?.forEach(element => {
      if (element?.mimeType?.includes('image')) {
        this.images.push(element);
      } else if (element?.mimeType?.includes('video')) {
        this.videos.push(element);
      } else {
        this.files.push(element);
      }
    });
  }

  public files: Maybe<MediaEntity | undefined>[] = [];
  public images: Maybe<MediaEntity | undefined>[] = [];
  public videos: Maybe<MediaEntity | undefined>[] = [];

  public fileType = MediaDisplayType.Image;

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

  constructor(
    public activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public router: Router,
  ) { }

  public routeBack(): void {
    this.backRoute
      ? this.router.navigate(this.backRoute)
      : this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  public openImageViewer(index: number): void {
    this.dialog.open(MediaViewerComponent, {
      data: {
        media: this.images,
        currentIndex: index
      } as MediaViewerData,
      panelClass: 'media-dialog',
      autoFocus: false,
    });
  }

  public mimeType(element?: Maybe<MediaEntity>): Maybe<MimeTypeDefinition> {
    return mimeTypeDefinition(element);
  }

}
