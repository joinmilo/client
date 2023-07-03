import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Maybe } from 'graphql/jsutils/Maybe';
import { UserContextEntity } from 'src/schema/schema';
import { SaveRatingDialogComponent } from '../save-rating-dialog/save-rating-dialog.component';

@Component({
  selector: 'app-save-rating',
  templateUrl: './save-rating.component.html',
  styleUrls: ['./save-rating.component.scss'],
})
export class SaveRatingComponent {
  
  hoverIndex?: Maybe<number>;

  @Output()
  rating: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  content: EventEmitter<string> = new EventEmitter<string>();

  @Input() currentUser?: Maybe<UserContextEntity> | undefined;

  @Input() currentRatingScore?: Maybe<number>;

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SaveRatingDialogComponent, {
      width: '32rem',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        rating: this.hoverIndex,
      }
    }).afterClosed().subscribe((result) => {
      if(result) {
        this.rating.emit(result.rating);
        if(result.content && result.content !== ''){
          this.content.emit(result.content);
        }
      }
    })
  }

  onHover(index?: number) {
    this.hoverIndex = index;
  }

  showIcon(index: number): IconPrefix {
    return ((this.hoverIndex ?? this.currentRatingScore ?? 0)>= index + 1 ? 'fas' : 'far') as IconPrefix;
  }
}
