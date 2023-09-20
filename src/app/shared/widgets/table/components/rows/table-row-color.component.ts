import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-row-color',
  template: `
    <div [ngStyle]="{
      'background-color': input,
      'height': '1.5rem',
      'width': '1.5rem',
      'border': '1px solid var(--color-border)',
      'border-radius': '.5rem',
    }">
    </div>
  `,
})
export class TableRowColorComponent {

  @Input()
  public input?: string;

}