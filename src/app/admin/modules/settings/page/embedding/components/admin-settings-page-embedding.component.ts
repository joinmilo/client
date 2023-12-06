import { ChangeDetectorRef, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { PageEmbeddingEntity } from 'src/app/core/api/generated/schema';
import { AdminSettingsPageEmbeddingDialogComponent } from './dialog/admin-settings-page-embedding-dialog.component';
import { AdminSettingsPageEmbeddingFormComponent } from './form/admin-settings-page-embedding-form.component';

@Component({
  selector: 'app-admin-settings-page-embedding',
  templateUrl: './admin-settings-page-embedding.component.html',
  styleUrls: ['./admin-settings-page-embedding.component.scss'],
})
export class AdminSettingsPageEmbeddingComponent {

  public elements: PageEmbeddingEntity[] = [
    {
      label: 'test1'
    },
    {
      label: 'test2'
    },
    {
      label: 'test3'
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
      .subscribe(embeddingType => {
        this.elements.push({
          type: embeddingType
        });
        this.cdr.detectChanges();
      });
  }
}