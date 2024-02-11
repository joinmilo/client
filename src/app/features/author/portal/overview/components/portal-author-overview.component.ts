import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SortOption, SortPaginate } from 'ngx-cinlib/tables';
import { Subject, takeUntil } from 'rxjs';
import { SchemaService } from 'src/app/core/services/schema.service';
import { CardType } from 'src/app/shared/widgets/card/typings/card';
import { PortalAuthorOverviewActions } from '../state/portal-author-overview.actions';
import { selectAuthors } from '../state/portal-author-overview.selectors';

@Component({
  selector: 'app-portal-author-overview',
  templateUrl: './portal-author-overview.component.html',
  styleUrls: ['./portal-author-overview.component.scss']
})
export class PortalAuthorOverviewComponent implements OnDestroy {

  public authors = this.store.select(selectAuthors);

  public cardType = CardType.Contact;

  public sortOptions: SortOption[] = [
    {
      label: 'name',
      field: 'user.firstName',
    },
    {
      label: 'name',
      field: 'user.firstName',
      dir: 'desc'
    },
  ];

  private destroy = new Subject<void>();

  constructor(
    private schemaService: SchemaService, 
    private store: Store,
  ) {
    this.authors
      ?.pipe(takeUntil(this.destroy))
      ?.subscribe(authors => this.schemaService.createArraySchema('UserContextEntity', authors?.result));
  }

  public updateParams(params: SortPaginate) {
    this.store.dispatch(PortalAuthorOverviewActions.updateParams(params));
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}