import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslationService } from 'src/app/core/services/translation.service';

@Injectable({
  providedIn: 'root'
})
export class TablePaginatorService extends MatPaginatorIntl {

  public override itemsPerPageLabel = 'Anzahl pro Seite: ';

  public override nextPageLabel = 'Nächste Seite';

  public override previousPageLabel = 'vorherige Seite';

  public override firstPageLabel = 'Erste Seite';
  
  public override lastPageLabel = 'Letzte Seite';

  constructor(
    private translationService: TranslationService, 
  ) {
    super();

    this.translationService.label('itemsPerPage')
      .subscribe(translation => {
        this.itemsPerPageLabel = translation || this.itemsPerPageLabel;
         this.changes.next();
      });

    this.translationService.label('nextPage')
      .subscribe(translation => {
        this.nextPageLabel = translation || this.nextPageLabel
        this.changes.next();
      });

    this.translationService.label('previousPage')
      .subscribe(translation => {
        this.previousPageLabel = translation || this.previousPageLabel;
        this.changes.next();
      });

    this.translationService.label('firstPage')
      .subscribe(translation => {
        this.firstPageLabel = translation || this.firstPageLabel;
        this.changes.next();
      });

    this.translationService.label('lastPage')
      .subscribe(translation => {
        this.lastPageLabel = translation || this.lastPageLabel;
        this.changes.next();
      });
  }

  public override getRangeLabel: (
    page: number,
    size: number,
    count: number
  ) => string = (
    page: number,
    size: number,
    count: number
  ) => {
    if (count !== 0 && size !== 0) {
      count = Math.max(count, 0);
      const start = page * size;
      const end = start < count ? Math.min(start + size, count) : start + size;

      return `${start + 1} - ${end} / ${count}`;
    }

    return '0 / 0';
  }

}
