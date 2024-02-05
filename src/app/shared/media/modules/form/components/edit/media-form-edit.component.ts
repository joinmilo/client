import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppValidators } from 'ngx-cinlib/forms/validators';
import { Maybe, MediaEntity } from 'src/app/core/api/generated/schema';
import { mediaBaseApi } from 'src/app/core/constants/url.constants';
import { MediaService } from 'src/app/shared/media/services/media.service';
import { MediaEditDialogData, MediaEnhancedEntity } from 'src/app/shared/media/typings/media';

@Component({
  selector: 'app-media-form-edit',
  templateUrl: './media-form-edit.component.html',
  styleUrls: ['./media-form-edit.component.scss'],
})
export class MediaFormEditComponent {

  public form = this.fb.group({
    id: [''],
    card: [false],
    title: [false],
    media: this.fb.group({
      id: [''],
      name: [''],
      url: ['', [AppValidators.validUrl()]],
      attribution: this.fb.group({
        id: [''],
        title: [''],
        author: [''],
        source: [''],
        license: [''],
      })
    }),
  });

  private media?: MediaEntity;

  public isMediaMimeType = false;

  public displayUrl = false;
  public urlError = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: MediaEditDialogData,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MediaFormEditComponent>,
    private mediaService: MediaService,
  ) {
    this.media = this.extractMedia();
    this.isMediaMimeType = this.checkIsMediaMimeType(this.media);

    this.displayUrl = typeof this.media.url === 'string' && !this.media.url.includes(mediaBaseApi),
    this.form.patchValue({
      id: (this.data.element as MediaEnhancedEntity).id,
      card: (this.data.element as MediaEnhancedEntity)?.card,
      title: (this.data.element as MediaEnhancedEntity)?.title,
      media: {
        id: this.media.id,
        name: this.media.name,
        url: this.media.url,
        attribution: {
          id: this.media.attribution?.id,
          title: this.media.attribution?.title,
          author: this.media.attribution?.author,
          source: this.media.attribution?.source,
          license: this.media.attribution?.license
        }
      }
    });
  }

  private extractMedia(): MediaEntity {
    return Object.hasOwn(this.data.element, 'media')
      ? (this.data.element as MediaEnhancedEntity).media
      : this.data.element as MediaEntity;
  }

  private checkIsMediaMimeType(media: Maybe<MediaEntity>): boolean {
    const mimeType = this.mediaService.mimeTypeDefinition(media);
    return mimeType === 'IMAGE' || mimeType === 'VIDEO';
  }

  public onSubmit(): void {
    this.dialogRef.close(this.data.displayCardToggle || this.data.displayTitleToggle
      ? this.mapEnhancedMedia()
      : this.mapMedia());
  }
  
  // TODO: way to complex...
  // Alternative could be put every media field in forms without displaying, so that deep copying is not necessary
  private mapEnhancedMedia(): Partial<MediaEnhancedEntity> {
    const result = Object.hasOwn(this.data.element, 'media')
      ? { ...{ ...this.data.element, ...this.form.value },
          media: { ...(this.data.element as MediaEnhancedEntity).media, ...this.form.value.media }
        }
      : { ...this.form.value, media: {...this.data.element, ...this.form.value.media } };

    return this.hasAttributionValues()
      ? result
      : {
          ...result, media: {
            ...result.media, attribution: undefined
          } 
        };
  }

  private mapMedia(): MediaEntity {
    const result = { ...this.data.element, ...this.form.value.media };

    return this.hasAttributionValues()
      ? result
      : { ...result, attribution: undefined };
  }

  private hasAttributionValues(): boolean {
    let hasValues = false;
    const attributionForm = this.form.controls.media.controls.attribution;

    Object.keys(attributionForm.value).forEach(controlName => {
      const control = attributionForm.get(controlName);
      if (control?.value) {
        hasValues = true;
        return;
      }
    });

    return hasValues;
  }

}