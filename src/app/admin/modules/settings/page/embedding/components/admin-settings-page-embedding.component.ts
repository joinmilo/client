import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminSettingsPageEmbeddingDialogComponent } from './dialog/admin-settings-page-embedding-dialog.component';

@Component({
  selector: 'app-admin-settings-page-embedding',
  templateUrl: './admin-settings-page-embedding.component.html',
  styleUrls: ['./admin-settings-page-embedding.component.scss'],
})
export class AdminSettingsPageEmbeddingComponent {

  public elements: string[] = [
    'test1',
    'test2',
    'test3'
  ];

  constructor(
    private dialog: MatDialog,
  ) {}

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
  }

  public selectEmbedding(): void {
    this.dialog.open(AdminSettingsPageEmbeddingDialogComponent);
  }
}