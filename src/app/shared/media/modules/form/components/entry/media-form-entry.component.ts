import { Component, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { MediaFormMode } from 'src/app/shared/media/typings/media';

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

  public isDisabled = false;

  public media: MediaEntity[] = [];

  public mode?: MediaFormMode;

  private onChange?: (value?: Maybe<MediaEntity[]>) => void;
  private onTouched?: () => void;

  public emit($event: MediaEntity[]) {
    this.onTouched?.();
    this.uploads.emit($event);
    this.mode = undefined;
  }

  public removeFile(fileIndex: number) {
    this.onTouched?.();
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
    this.isDisabled = isDisabled;
    if (isDisabled) {
      this.mode = undefined;
    }
  }
}