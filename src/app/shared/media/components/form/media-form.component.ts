import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { MediaEntity } from 'src/schema/schema';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     multi: true,
  //     useExisting: FileUploadFormComponent,
  //   }
  // ],
})
export class MediaFormComponent {

  @Output()
  public uploads: EventEmitter<MediaEntity[]> = new EventEmitter();

  @Input()
  public maxFiles? = 5;

  @Input()
  public maxFileSize = 1024 * 1024 * 10 //10mb

  public media: MediaEntity[] = [];

  public labelVariables = new Map([
    ['maxFiles', this.maxFiles?.toString()],
    ['maxFileSize', '10mb']
  ]);

  public notBeLargerLabel = 'filesCannotBeLargerThanX';
  public notMoreThanLabel = 'notMoreThanXFiles';

  constructor(
    private store: Store,
  ) { }

  public addFiles(newMedia: MediaEntity[]) {

    const media = [...this.media, ...newMedia];

    if (newMedia.some(element => element.size > this.maxFileSize)) {
      this.store.dispatch(CoreActions.setFeedback({
        type: FeedbackType.Error,
        labelMessage: this.notBeLargerLabel,
        labelAction: 'chooseOtherFile',
        labelVariables: this.labelVariables,
      }));
    } else if (this.maxFiles && media?.length > this.maxFiles) {
      this.store.dispatch(CoreActions.setFeedback({
        type: FeedbackType.Error,
        labelMessage: this.notMoreThanLabel,
        labelAction: 'chooseLessFiles',
        labelVariables: this.labelVariables,
      }));
    }
    else {
      this.media = media;
      this.uploads.emit(this.media);
    }

  }

  public removeFile(fileIndex: number) {
    this.media.splice(fileIndex, 1);
    this.uploads.emit(this.media);
  }

  // public control = new FormControl(false);

  // private onChange?: (value?: boolean) => void;
  // private onTouched?: () => void;

  // private destroy = new Subject<void>();

  // constructor() {
  //   this.control.valueChanges
  //     .pipe(takeUntil(this.destroy))
  //     .subscribe(value => {
  //       this.onChange && this.onChange(!!value);
  //       this.onTouched && this.onTouched();
  //     })
  // }

  // public writeValue(value: boolean): void {
  //   this.control.setValue(value);
  // }

  // public registerOnChange(onChange: (value?: boolean) => void): void {
  //   this.onChange = onChange;
  // }

  // public registerOnTouched(onTouched?: () => void): void {
  //   this.onTouched = onTouched;
  // }

  // public ngOnDestroy(): void {
  //   this.destroy.next();
  //   this.destroy.complete();
  // }
}