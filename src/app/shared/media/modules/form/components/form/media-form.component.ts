import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { CoreActions } from 'src/app/core/state/actions/core.actions';
import { FeedbackType } from 'src/app/core/typings/feedback';
import { MediaEditDialogData, MediaEnhancedEntity } from 'src/app/shared/media/typings/media';
import { MediaFormEditComponent } from '../edit/media-form-edit.component';

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
export class MediaFormComponent implements ControlValueAccessor, OnDestroy {

  @Input()
  public maxFiles?: number;

  @Input()
  public maxFileSize = 1024 * 1024 * 10 //10mb

  @Input()
  public media: (MediaEntity | MediaEnhancedEntity)[] = [];

  @Input()
  public cardToggle = false;

  @Input()
  public titleToggle = false;

  @Output()
  public uploads: EventEmitter<(MediaEntity | MediaEnhancedEntity)[]> = new EventEmitter();

  private onChange?: (value?: Maybe<(MediaEntity | MediaEnhancedEntity)[]>) => void;
  private onTouched?: () => void;

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }

  public addFiles(newMedia: MediaEntity[]) {
    this.onTouched?.();

    if (newMedia.some(element => element.size > this.maxFileSize)) {
      this.store.dispatch(CoreActions.setFeedback({
        type: FeedbackType.Error,
        labelMessage: 'filesCannotBeLargerThanX',
        labelAction: 'chooseOtherFile',
        labelVariables: new Map([
          ['maxFileSize', '10mb'],
        ]),
      }));
    } else if (this.maxFiles && this.media?.length + newMedia.length > this.maxFiles) {
      this.store.dispatch(CoreActions.setFeedback({
        type: FeedbackType.Error,
        labelMessage: 'notMoreThanXFiles',
        labelAction: 'chooseLessFiles',
        labelVariables: new Map([
          ['maxFiles', this.maxFiles?.toString()],
        ]),
      }));
    } else {
      this.addDetails(newMedia);
    }
  }

  private addDetails(newMedia: MediaEntity[]): void {
    newMedia.length === 1
      ? this.openDetails(newMedia[0])
          .pipe(takeUntil(this.destroy))
          .subscribe(edited => this.storeMedia([{...newMedia[0], ...edited}]))
      : this.storeMedia(newMedia);
  }

  public edit(index: number): void {
    this.openDetails(this.media[index])
      .pipe(takeUntil(this.destroy))
      // .subscribe(edited => this.storeMedia([{...newMedia[0], ...edited}]))
  }

  public openDetails(media: MediaEntity | MediaEnhancedEntity): Observable<MediaEntity | MediaEnhancedEntity> {
    return this.dialog.open(MediaFormEditComponent, {
      panelClass: 'media-form-dialog',
      data: {   
        element: media,
        card: this.cardToggle,
        title: this.titleToggle,
      } as MediaEditDialogData
    }).afterClosed();
  }

  private storeMedia(newMedia: (MediaEntity | MediaEnhancedEntity)[]): void {
    this.media = [...this.media, ...newMedia];
    this.uploads.emit(this.media);
    this.onChange?.(this.media);

    //TODO: This needs to be set because view is not updating. Needs debugging
    this.cdr.detectChanges();
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

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}