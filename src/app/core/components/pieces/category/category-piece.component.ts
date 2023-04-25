import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/typings/category';
import { invertColor } from 'src/app/core/utils/color.utils';
import { Maybe } from 'src/schema/schema';

@Component({
  selector: 'app-category-piece',
  templateUrl: './category-piece.component.html',
  styleUrls: ['./category-piece.component.scss']
})
export class CategoryPieceComponent {

  @Input()
  public category?: Maybe<Category>;

  public styles(): { [klass: string]: unknown; } |null | undefined {
    const color = this.category?.color ?? '#B7B7B7';
    return {
      'background': color,
      'color': invertColor(color),
    }
  }

}
