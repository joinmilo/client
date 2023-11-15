import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MediaEntity } from 'src/app/core/api/generated/schema';
import { mediaBaseApi } from 'src/app/core/constants/url.constants';
import { AppValidators } from 'src/app/core/validators/validators';
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

  public displayUrl = false;
  public urlError = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: MediaEditDialogData,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MediaFormEditComponent>
  ) {
    this.media = this.extractMedia();

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

  public onSubmit(): void {
    const value = this.hasAttributionValues()
      ? this.form.value
      : {
          ...this.form.value, media: { 
            ...this.form.value.media, attribution: undefined
          } 
        };

    this.dialogRef.close(this.data.displayCardToggle || this.data.displayTitleToggle
      ? value as MediaEnhancedEntity
      : value.media as MediaEntity)
  }

  private hasAttributionValues(): boolean {
    let hasValues = false;

    Object.keys(this.form.controls.media.controls.attribution).forEach(controlName => {
      const control = this.form.get(controlName);
      if (control?.value) {
        hasValues = true;
        return;
      }
    });

    return hasValues;
  }

}