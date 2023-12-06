/* eslint-disable @typescript-eslint/no-explicit-any */
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Input, Type } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    FontAwesomeModule,
    NgComponentOutlet,
  ]
})
export class DragDropComponent {

  @Input({ required: true })
  public component!: Type<any>;

  @Input()
  public editable = false;

  inputs = { headline: 'Dr. IQ', body: 'Smart as they come' }

  @Input({ required: true })
  public elements!: any[];

  public drop(event: CdkDragDrop<unknown[]>): void {
    moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
  }

}
