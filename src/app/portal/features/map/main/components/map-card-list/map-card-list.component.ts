import {Component, Input, OnChanges} from '@angular/core';
import {CardData, CardEntity} from 'src/app/shared/card/typings/card';


@Component({
  selector: 'app-map-card-list',
  templateUrl: 'map-card-list.component.html',
  styleUrls: ['map-card-list.component.scss']
})
export class MapCardListComponent implements OnChanges {

  @Input()
  public entity!: CardEntity;

  @Input()
  public cards: CardData[] = [];

  @Input()
  public pageSize = 4;

  start = 0;
  end = this.pageSize;

  ngOnChanges() {
    this.paginate(this.start);
  }

  previous() {
    this.paginate(this.start - this.size());
  }

  next() {
    this.paginate(this.end);
  }

  private paginate(nextStart: number) {
    this.start = Math.max(0, Math.min(nextStart, this.maxStart()));
    this.end = this.start + this.size();
  }

  maxStart() {
    return this.cards.length - (this.cards.length % this.size());
  }

  private size() {
    return Math.max(this.pageSize, 1);
  }
}
