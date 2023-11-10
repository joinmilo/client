import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaFormMode } from 'src/app/shared/media/typings/media';
import { MediaUploadComponent } from '../upload/media-form-upload.component';

@Component({
  selector: 'app-media-form-entry',
  templateUrl: './media-form-entry.component.html',
  styleUrls: ['./media-form-entry.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MediaFormEntryComponent,
    }
  ],
})
export class MediaFormEntryComponent implements ControlValueAccessor {

  @Output()
  public uploads: EventEmitter<MediaEntity[]> = new EventEmitter();

  @Input()
  public maxFiles?: number;

  @Input()
  public maxFileSize = 1024 * 1024 * 10 //10mb

  public media: MediaEntity[] = [];

  public mode?: MediaFormMode;

  public labelVariables = new Map([
    ['maxFiles', this.maxFiles?.toString()],
    ['maxFileSize', '10mb'],
  ]);

  public notBeLargerLabel = 'filesCannotBeLargerThanX';
  public notMoreThanLabel = 'notMoreThanXFiles';

  @ViewChild(MediaUploadComponent)
  private uploadComponent?: MediaUploadComponent;

  private onChange?: (value?: Maybe<MediaEntity[]>) => void;
  private onTouched?: () => void;

  constructor(
    private store: Store,
  ) { }

  public removeFile(fileIndex: number) {
    this.media.splice(fileIndex, 1);
    this.onChange?.(this.media);
    this.uploads.emit(this.media);
  }

  public writeValue(media: MediaEntity[]): void {
    this.media = media;
  }

  public registerOnChange(onChange: (value?: Maybe<MediaEntity[]>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched?: () => void): void {
    this.onTouched = onTouched;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.uploadComponent
      && (this.uploadComponent.disabled = isDisabled);
  }
}