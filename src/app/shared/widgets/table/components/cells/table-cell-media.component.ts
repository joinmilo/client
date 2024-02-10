import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MediaViewerData } from 'ngx-cinlib/media/common';
import { MediaViewerComponent } from 'ngx-cinlib/media/elements';
import { MediaFormDialogComponent } from 'ngx-cinlib/media/forms';
import { MediaEntity } from 'src/app/core/api/generated/schema';
import { TableActions } from '../../state/table.actions';
import { TableCellComponent } from '../../typings/cell';

@Component({
  selector: 'app-table-cell-media',
  template: `
    <!-- EDIT AREA -->
    <button *ngIf="editMode; else displayTemplate"
      mat-button
      (click)="openForm()">
        <cin-icon [icon]="['fas', 'upload']"></cin-icon>
    </button>

    <!-- DISPLAY AREA -->
    <ng-template #displayTemplate>
      <button *ngIf="input"
        mat-button
        (click)="openViewer()">
          <cin-icon [icon]="['fas', 'image']"></cin-icon>
      </button>

      <span *ngIf="!input">{{ ' - ' }}</span>
    </ng-template>
  `,
})
export class TableCellMediaComponent extends TableCellComponent<MediaEntity> {

  constructor(
    store: Store,

    private dialog: MatDialog,
  ) { super(store); }

  public openForm(): void {
    this.dialog.open(MediaFormDialogComponent, {
      data: 1,
      autoFocus: false,
    }).afterClosed()
    .subscribe((value: MediaEntity[]) => {
      if (this.column && this.row && value?.length) {
        this.store.dispatch(TableActions.editRow(
          this.column?.field,
          value[0]
        ));
      }
    });
  }

  public openViewer(): void {
    this.dialog.open(MediaViewerComponent, {
      data: {
        media: [this.input],
        currentIndex: 0
      } as MediaViewerData,
      panelClass: 'media-dialog',
      autoFocus: false,
    });
  }
}
