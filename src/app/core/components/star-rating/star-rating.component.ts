import { EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input('canDoRating') public canDoRating = false; 
  @Input('rating') public rating: number = 0;
  @Input('starCount') public starCount: number = 5;
  @Input('color') public color: string = 'accent';
  @Output() public ratingUpdated = new EventEmitter();


  public snackBarDuration: number = 2000;
  public ratingArr : number[] = [];

  constructor(public snackBar: MatSnackBar) {
  }


  ngOnInit() {
    console.log("a "+this.starCount)
    for (let index : number = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) : IconPrefix {
    return (this.rating >= index + 1 ? 'fas' : 'far') as IconPrefix;
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}

