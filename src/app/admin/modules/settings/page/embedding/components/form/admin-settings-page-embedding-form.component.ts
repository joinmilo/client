import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEmbeddingEntity } from 'src/app/core/api/generated/schema';
import { DragDropElementComponent } from 'src/app/shared/layout/drag-drop/typings/drag-drop-element';
import { DragDropElementInput } from 'src/app/shared/layout/drag-drop/typings/drag-drop-input';

@Component({
  selector: 'app-admin-settings-page-embedding-form',
  templateUrl: './admin-settings-page-embedding-form.component.html',
  styleUrls: ['./admin-settings-page-embedding-form.component.scss'],
})
export class AdminSettingsPageEmbeddingFormComponent implements OnInit, DragDropElementComponent<PageEmbeddingEntity> {
  ngOnInit(): void {
    this.control.setValue(this.input?.element.label as string)
  }

  @Input()
  public input?: DragDropElementInput<PageEmbeddingEntity>;

  public control = new FormControl('');

  send() {
    this.input?.edit({
      label: this.control.value,
    }, this.input.index);
  }

}