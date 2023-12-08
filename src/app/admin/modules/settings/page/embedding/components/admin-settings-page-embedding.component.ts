import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, PageEmbeddingEntity, PageEmbeddingTypeEntity } from 'src/app/core/api/generated/schema';
import { DragDropInput } from 'src/app/shared/layout/drag-drop/typings/drag-drop-input';
import { AdminSettingsPageEmbeddingDialogComponent } from './dialog/admin-settings-page-embedding-dialog.component';
import { AdminSettingsPageEmbeddingFormComponent } from './form/admin-settings-page-embedding-form.component';

@Component({
  selector: 'app-admin-settings-page-embedding',
  templateUrl: './admin-settings-page-embedding.component.html',
  styleUrls: ['./admin-settings-page-embedding.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AdminSettingsPageEmbeddingComponent
    }
  ],
})
export class AdminSettingsPageEmbeddingComponent implements ControlValueAccessor, OnDestroy {

  public elements: DragDropInput<PageEmbeddingEntity>[] = [];

  public component = AdminSettingsPageEmbeddingFormComponent;

  private onChange?: (embeddings: Maybe<PageEmbeddingEntity[]>) => void;

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) {}

  public selectEmbedding(): void {
    this.dialog.open(AdminSettingsPageEmbeddingDialogComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe((embeddingType: PageEmbeddingTypeEntity) => {
        if (embeddingType) {
          this.elements.push({
            element: {
              type: embeddingType,
              attributes: embeddingType.attributes?.map(attribute => ({
                type: {
                  id: attribute?.id
                }
              }))
            },
            expanded: true,
          });
          this.cdr.detectChanges();
        }
      });
  }

  public updated(embeddings: PageEmbeddingEntity[]): void {
    this.onChange?.(embeddings.map((embedding, index) => ({
      ...embedding, order: index
    })));

    this.elements = embeddings?.length
      ? embeddings?.map(element => ({
          label: element.label,
          element,
          expanded: false,
        }))
      : [];
  }

  public writeValue(value: Maybe<PageEmbeddingEntity[]>): void {
    this.elements = value?.length
      ? value?.map(element => ({
          label: element.label,
          element,
          expanded: false,
        }))
      : [];
    this.cdr.detectChanges();
  }

  public registerOnChange(onChange: (embeddings: Maybe<PageEmbeddingEntity[]>) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(): void {
    return;
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}