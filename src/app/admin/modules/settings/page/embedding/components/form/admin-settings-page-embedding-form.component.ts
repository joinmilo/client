import { Component, Input } from '@angular/core';
import { PageEmbeddingEntity } from 'src/app/core/api/generated/schema';
import { DragDropElementComponent } from 'src/app/shared/layout/drag-drop/typings/drag-drop-element';
import { DragDropElementInput } from 'src/app/shared/layout/drag-drop/typings/drag-drop-input';

@Component({
  selector: 'app-admin-settings-page-embedding-form',
  templateUrl: './admin-settings-page-embedding-form.component.html',
  styleUrls: ['./admin-settings-page-embedding-form.component.scss'],
})
export class AdminSettingsPageEmbeddingFormComponent implements DragDropElementComponent<PageEmbeddingEntity> {
  
  @Input()
  public input?: DragDropElementInput<PageEmbeddingEntity>;

  public saved(value: PageEmbeddingEntity): void {
    this.input?.edit(
      value,
      this.input.index
    );
  }

}