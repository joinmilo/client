import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from '../../services/media.service';

@Component({
  selector: 'app-media-upload',
  templateUrl: './media-upload.component.html',
  styleUrls: ['./media-upload.component.scss'],
})
export class MediaUploadComponent {

  @Output()
  public uploads: EventEmitter<MediaEntity[]> = new EventEmitter();

  @Input()
  public disabled: Maybe<boolean> = false;

  public isDraggedOver = false;

  constructor(
    private mediaService: MediaService
  ) {}

  @HostListener('dragover', ['$event'])
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDraggedOver = !this.disabled;
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDraggedOver = false;
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.isDraggedOver = false;

    if (!this.disabled
      && evt?.dataTransfer?.files?.length) {
        this.addFiles(evt.dataTransfer.files);
    }
  }

  public onFileBrowse(event: Event) {
    const files = (event?.target as HTMLInputElement)?.files;
    if (files?.length) {
      this.addFiles(files);
    }
  }

  public addFiles(fileList: FileList) {
    forkJoin(
      Array.from(fileList)
        .map(file => this.mediaService
        .fileToMedia(file))
    ).subscribe((media: MediaEntity[]) => this.uploads.emit(media));
      
  }

}