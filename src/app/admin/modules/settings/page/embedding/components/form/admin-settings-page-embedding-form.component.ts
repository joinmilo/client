/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Subscription, take } from 'rxjs';
import {
    Maybe,
    MediaEntity,
    PageAttributeEntity,
    PageAttributeTypeEntity,
    PageEmbeddingEntity,
    PageEmbeddingTypeEntity,
} from 'src/app/core/api/generated/schema';
import { selectPlugins } from '../../state/admin-settings-page-embedding.selectors';
import { PageEmbeddingFormFieldType } from '../../typings/page-embeddings-form';

@Component({
  selector: 'app-admin-settings-page-embedding-form',
  templateUrl: './admin-settings-page-embedding-form.component.html',
  styleUrls: ['./admin-settings-page-embedding-form.component.scss'],
})
export class AdminSettingsPageEmbeddingFormComponent implements OnDestroy {

  @Input({ required: true })
  public set embedding(embedding: PageEmbeddingEntity) {
    this.initForm(embedding);
  }

  @Output()
  public saved = new EventEmitter<PageEmbeddingEntity>();

  @Output()
  public validUpdated = new EventEmitter<boolean>();

  public form = this.createForm();

  public plugins = this.store.select(selectPlugins);

  public subscription?: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private translationService: TranslationService
  ) {}

  private initForm(embedding: PageEmbeddingEntity): void {
    this.form = this.createForm();
    this.patchBaseValue(embedding);

    this.initButtonUrlForm(embedding);
    this.initMultiMediaForm(embedding);
    this.initPluginForm(embedding);
    this.initTextMediumForm(embedding);
    this.initTitleForm(embedding);
  }

  private createForm() {
    const form = this.fb.group({
      base: this.fb.group({
        id: ['' as Maybe<string>],
        label: ['' as Maybe<string>, [Validators.required]],
        type: [
          undefined as Maybe<PageEmbeddingTypeEntity>,
          [Validators.required],
        ],
      }),
      buttonUrl: this.fb.group({}),
      media: this.fb.group({}),
      plugin: this.fb.group({}),
      textMedium: this.fb.group({}),
      title: this.fb.group({}),
    });

    this.subscription?.unsubscribe();
    this.subscription = form.statusChanges
      .subscribe(status => this.validUpdated.emit(status === 'VALID'))

    return form;
  }

  private patchBaseValue(embedding: PageEmbeddingEntity): void {
    this.form.patchValue({
      base: {
        id: embedding.id,
        label: embedding.label,
        type: embedding.type,
      },
    });
  }

  private initButtonUrlForm(embedding: PageEmbeddingEntity): void {
    this.initTranslatableControl(
      this.form.controls.buttonUrl,
      'button',
      embedding
    );

    this.initValueControl(
      this.form.controls.buttonUrl,
      'url',
      embedding
    );
  }

  private initMultiMediaForm(embedding: PageEmbeddingEntity): void {
    const attribute = this.findAttribute('multimedia', embedding);

    if (attribute) {
      this.form.controls.media.addControl(
        'multimedia',
        this.fb.group({
          value: [attribute?.references?.map((reference) => reference?.media)],
          type: {
            id: attribute.type?.id,
            code: attribute.type?.code
          }
        })
      );
    }
  }

  private initPluginForm(embedding: PageEmbeddingEntity): void {
    const attribute = this.findAttribute('plugin', embedding);

    if (attribute) {
      this.form.controls.plugin.addControl(
        'plugin',
        this.fb.group({
          value: [attribute?.references?.[0]?.plugin?.id],
          type: {
            id: attribute.type?.id,
            code: attribute.type?.code
          }
        })
      );
    }
  }

  private initTextMediumForm(embedding: PageEmbeddingEntity) {
    this.initTranslatableControl(
      this.form.controls.textMedium,
      'text',
      embedding
    );

    const attribute = this.findAttribute('media', embedding);
    if (attribute) {
      this.form.controls.textMedium.addControl(
        'media',
        this.fb.group({
          value: [attribute?.references?.map((reference) => reference?.media)],
          type: {
            id: attribute?.type?.id,
            code: attribute.type?.code
          }
        })
      );
    }
  }

  private initTitleForm(embedding: PageEmbeddingEntity): void {
    this.initTranslatableControl(
      this.form.controls.title,
      'title',
      embedding
    );
  }

  private initTranslatableControl(
    formGroup: FormGroup<{}>,
    field: PageEmbeddingFormFieldType,
    embedding: PageEmbeddingEntity
  ) {
    const attribute = this.findAttribute(field, embedding);
    if (attribute) {
      attribute?.translatable
        ? formGroup.addControl(field,
            this.fb.group({
              value: [attribute.translatable],
              type: {
                id: attribute.type?.id,
                code: attribute.type?.code,
              }
            })
          )
        : this.translationService
            .translatable(attribute, 'translatable')
            .pipe(take(1))
            .subscribe(translatable =>
              formGroup.addControl(field, this.fb.group({
                value: [translatable],
                type: {
                  id: attribute.type?.id,
                  code: attribute.type?.code
                }
              }))
            );
    }
  }

  private initValueControl(
    formGroup: FormGroup<{}>,
    field: PageEmbeddingFormFieldType,
    embedding: PageEmbeddingEntity
  ) {
    const attribute = this.findAttribute(field, embedding);

    if (attribute) {
      formGroup.addControl(field,
        this.fb.group({
          value: [attribute.value],
          type: {
            id: attribute.type?.id,
            code: attribute.type?.code,
          }
        })
      )
    }
  }

  private findAttribute(
    field: PageEmbeddingFormFieldType,
    embedding: PageEmbeddingEntity
  ): Maybe<PageAttributeEntity> {
    return embedding?.attributes?.find(
      (attribute) => attribute?.type?.code === field
    );
  }

  public hasControl(
    group: FormGroup<{}>,
    field: PageEmbeddingFormFieldType,
  ): boolean {
    return group.contains(field);
  }

  public getControl(group: FormGroup<any>, field: string): FormControl<any> {
    return group.get(field)?.get('value') as FormControl;
  }

  public update(): void {
    this.saved.emit({
      id: this.form.value.base?.id,
      label: this.form.value.base?.label,
      type: this.form.value.base?.type,
      attributes: this.createAttributeValues()
    })
  }

  private createAttributeValues(): Maybe<Maybe<PageAttributeEntity>[]> {
    const attributes: PageAttributeEntity[] = [];

    if (this.hasControl(this.form.controls.buttonUrl, 'button')) {
      const attribute = this.createTranslatableValue(this.form.controls.buttonUrl, 'button');
      if (attribute) {
        attributes.push(attribute);
      }
    }

    if (this.hasControl(this.form.controls.textMedium, 'text')) {
      const attribute = this.createTranslatableValue(this.form.controls.textMedium, 'text');
      if (attribute) {
        attributes.push(attribute);
      }
    }

    if (this.hasControl(this.form.controls.title, 'title')) {
      const attribute = this.createTranslatableValue(this.form.controls.title, 'title');
      if (attribute) {
        attributes.push(attribute);
      }
    }

    if (this.hasControl(this.form.controls.textMedium, 'media')) {
      const attribute = this.createMediaValue(this.form.controls.textMedium, 'media');
      if (attribute) {
        attributes.push(attribute);
      }
    }

    if (this.hasControl(this.form.controls.media, 'multimedia')) {
      const attribute = this.createMediaValue(this.form.controls.media, 'multimedia');
      if (attribute) {
        attributes.push(attribute);
      }
    }

    if (this.hasControl(this.form.controls.plugin, 'plugin')) {
      const attribute = this.createPluginValue();
      if (attribute) {
        attributes.push(attribute);
      }
    }

    if (this.hasControl(this.form.controls.buttonUrl, 'url')) {
      const attribute = this.createNonTranslatableValue(this.form.controls.buttonUrl, 'url')
      if (attribute) {
        attributes.push(attribute);
      }
    }

    return attributes;
  }
  
  private createTranslatableValue(
    parent: FormGroup<{}>,
    field: string
  ): Maybe<PageAttributeEntity> {
    const group = parent.get(field);
    return group?.get('value')?.value
      ? {
          translatable: group?.get('value')?.value as unknown as string,
          type: group?.get('type')?.value as unknown as PageAttributeTypeEntity
        }
      : undefined;
  }

  private createMediaValue(
    parent: FormGroup<{}>,
    field: string
  ): Maybe<PageAttributeEntity> {
    const group = parent.get(field);
    return group?.get('value')?.value 
      ? {
          references: (group?.get('value')?.value as unknown as MediaEntity[])?.map(media => ({
            media
          })),
          type: group?.get('type')?.value as unknown as PageAttributeTypeEntity
        }
      : undefined;
  }

  private createPluginValue(): Maybe<PageAttributeEntity> {
    const group = this.form.controls.plugin.get('plugin');
    return group?.get('value')?.value
      ? {
          references: [
            {
              plugin: {
                id: group?.get('value')?.value as unknown as string
              }
            }
          ],
          type: group?.get('type')?.value as unknown as PageAttributeTypeEntity
        }
      : undefined;
  }

  private createNonTranslatableValue(
    parent: FormGroup<{}>,
    field: string
  ): Maybe<PageAttributeEntity> {
    const group = parent.get(field);
    return group?.get('value')?.value 
      ? {
          value: group?.get('value')?.value as unknown as string,
          type: group?.get('type')?.value as unknown as PageAttributeTypeEntity
        }
      : undefined;
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
