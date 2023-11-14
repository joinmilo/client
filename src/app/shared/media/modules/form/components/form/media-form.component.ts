import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: MediaFormComponent,
    }
  ],
})
export class MediaFormComponent implements ControlValueAccessor {

  @Output()
  public uploads: EventEmitter<MediaEntity[]> = new EventEmitter();

  @Input()
  public maxFiles?: number;

  @Input()
  public maxFileSize = 1024 * 1024 * 10 //10mb

  public media: MediaEntity[] = [];

  public notBeLargerLabel = 'filesCannotBeLargerThanX';
  public notMoreThanLabel = 'notMoreThanXFiles';

  private onChange?: (value?: Maybe<MediaEntity[]>) => void;
  private onTouched?: () => void;

  constructor(
    private store: Store,
  ) { }

  public addFiles(newMedia: MediaEntity[]) {

    this.onTouched?.();
    const media = [...this.media, ...newMedia];

    if (newMedia.some(element => element.size > this.maxFileSize)) {
      this.store.dispatch(CoreActions.setFeedback({
        type: FeedbackType.Error,
        labelMessage: this.notBeLargerLabel,
        labelAction: 'chooseOtherFile',
        labelVariables: new Map([
          ['maxFileSize', '10mb'],
        ]),
      }));
    } else if (this.maxFiles && media?.length > this.maxFiles) {
      this.store.dispatch(CoreActions.setFeedback({
        type: FeedbackType.Error,
        labelMessage: this.notMoreThanLabel,
        labelAction: 'chooseLessFiles',
        labelVariables: new Map([
          ['maxFiles', this.maxFiles?.toString()],
        ]),
      }));
    } else {
      this.media = media;
      this.uploads.emit(this.media);
      this.onChange?.(this.media);
    }
  }

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

}