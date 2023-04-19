import { EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input('canDoRating') public canDoRating = false;
  @Input('rating') public rating: number = 0;
  @Input('starCount') public starCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Output() public ratingUpdated = new EventEmitter();
  hoverIndex = 0;

  public ratingArr: number[] = [];

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.initIcons();
  }

  initIcons() {
    for (let index: number = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  onHover(index: number) {
    this.hoverIndex = index;
    this.ratingArr = [];
    this.initIcons();
  }

  showIcon(index: number, hoverEffect: boolean = false): IconPrefix {
    return (
      (hoverEffect ? this.hoverIndex : this.rating) >= index + 1 ? 'fas' : 'far'
    ) as IconPrefix;
  }
}
