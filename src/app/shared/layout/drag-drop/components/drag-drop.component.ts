import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ContentChildren, EventEmitter, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmDeleteComponent } from '../../../dialogs/confirm-delete/confirm-delete.component';
import { DragDropElement } from '../typings/drag-drop-element';
import { DragDropElementComponent } from './element/drag-drop-element.component';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent implements OnDestroy {

  @Input()
  public disabled?: boolean;

  @Output()
  public deleted = new EventEmitter<number>();

  @Output()
  public updated = new EventEmitter<number[]>();

  @ContentChildren(DragDropElementComponent)
  public set components(components: QueryList<DragDropElementComponent>) {
    this.elements = components?.length
      ? components.toArray().map((component, initIndex) => ({
          component,
          initIndex
        }))
      : [];

    this.emit();
  }

  public elements!: DragDropElement[];

  private bodyElement: HTMLElement = document.body;

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
  ) {}

  public drag(): void {
    this.bodyElement.classList.add('inheritCursors');
    this.bodyElement.style.cursor = 'grabbing';
  }

  public drop(event: CdkDragDrop<DragDropElement[]>): void {
    this.bodyElement.classList.remove('inheritCursors');
    this.bodyElement.style.cursor = 'unset';

    moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
  
    this.emit();
  }

  public onDelete(index: number) {
    this.dialog.open(ConfirmDeleteComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe(confirmed => {
        if (confirmed) {
          this.deleted.emit(index);
        }
      });
  }

  private emit(): void {
    this.updated.emit(this.elements.map(element => element.initIndex));
  }


  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
