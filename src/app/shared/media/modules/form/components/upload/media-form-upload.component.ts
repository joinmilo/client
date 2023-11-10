import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaService } from 'src/app/shared/media/services/media.service';

@Component({
  selector: 'app-media-form-upload',
  templateUrl: './media-form-upload.component.html',
  styleUrls: ['./media-form-upload.component.scss'],
})
export class MediaUploadComponent {

  @Input()
  public disabled: Maybe<boolean> = false;

  @Output()
  public uploads = new EventEmitter<MediaEntity[]>();

  @Output()
  public back = new EventEmitter<void>();

  public isDraggedOver = false;

  constructor(
    private mediaService: MediaService
  ) {}

  public onBack(): void {
    this.back.emit();
  }

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