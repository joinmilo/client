import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { PageEmbeddingEntity, PageEmbeddingTypeEntity } from 'src/app/core/api/generated/schema';
import { DragDropInput } from 'src/app/shared/layout/drag-drop/typings/drag-drop-input';
import { AdminSettingsPageEmbeddingDialogComponent } from './dialog/admin-settings-page-embedding-dialog.component';
import { AdminSettingsPageEmbeddingFormComponent } from './form/admin-settings-page-embedding-form.component';

@Component({
  selector: 'app-admin-settings-page-embedding',
  templateUrl: './admin-settings-page-embedding.component.html',
  styleUrls: ['./admin-settings-page-embedding.component.scss'],
})
export class AdminSettingsPageEmbeddingComponent {

  public elements: DragDropInput<PageEmbeddingEntity>[] = [
    {
      element: {
        label: 'test1'
      },
      label: 'test1',
    },
    {
      element: {
        label: 'test2'
      },
      label: 'test2',
    },
    {
      element: {
        label: 'test3'
      },
      label: 'test3',
    },
  ];

  public component = AdminSettingsPageEmbeddingFormComponent;

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
              type: embeddingType
            },
            expanded: true,
          });
          this.cdr.detectChanges();
        }
      });
  }

  public deleted(index: number): void {
    this.elements.splice(index, 1);
  }
}