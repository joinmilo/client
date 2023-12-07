import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmDeleteComponent } from '../../dialogs/confirm-delete/confirm-delete.component';
import { DragDropElementComponent } from './typings/drag-drop-element';
import { DragDropElementInput, DragDropInput } from './typings/drag-drop-input';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    NgComponentOutlet,
  ]
})
export class DragDropComponent<T> implements OnDestroy {

  @Input({ required: true })
  public component!: Type<DragDropElementComponent<T>>;

  @Input({ required: true })
  public inputs!: DragDropInput<T>[];

  @Output()
  public deleted = new EventEmitter<number>();

  private bodyElement: HTMLElement = document.body;

  private destroy = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    public cdr: ChangeDetectorRef
  ) {}

  public drag(): void {
    this.bodyElement.classList.add('inheritCursors');
    this.bodyElement.style.cursor = 'grabbing';
  }

  public drop(event: CdkDragDrop<DragDropElementInput<T>[]>): void {
    this.bodyElement.classList.remove('inheritCursors');
    this.bodyElement.style.cursor = 'unset';

    moveItemInArray(this.inputs, event.previousIndex, event.currentIndex);
  }

  public createInput(index: number): Record<string,unknown> | undefined {
    return {
      input: {
        edit: this.onEdit,
        index: index,
        element: this.inputs[index].element,
      }
    }
  }

  public expand(index: number): void {
    this.inputs[index] = {
      ...this.inputs[index], expanded: true
    };
  }

  public collapse(index: number): void {
    this.inputs[index] = {
      ...this.inputs[index], expanded: false
    };
  }

  public onEdit = (element: T, index: number): void => {
    this.inputs[index] = {
      ...this.inputs[index], element
    };
  }

  public onDelete(index: number) {
    this.dialog.open(ConfirmDeleteComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy))
      .subscribe(confirmed => confirmed
        && this.deleted.emit(index));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
