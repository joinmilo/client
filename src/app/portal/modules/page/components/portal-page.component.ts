import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Maybe, PageEntity } from 'src/app/core/api/generated/schema';
import { slug } from 'src/app/core/constants/queryparam.constants';
import { SchemaService } from 'src/app/core/services/schema.service';
import { PortalPageActions } from '../state/portal-page.actions';
import { selectPage } from '../state/portal-page.selectors';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.component.html',
  styleUrls: ['./portal-page.component.scss']
})
export class PortalPageComponent implements OnInit, OnDestroy {

  public page?: Maybe<PageEntity>;

  private destroy = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private schemaService: SchemaService,
    private store: Store) { }

  public ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap(params => this.store.dispatch(
        params[slug]
          ? PortalPageActions.getPage(params[slug])
          : PortalPageActions.getLandingPage()
      )),
      switchMap(() => this.store.select(selectPage)),
      takeUntil(this.destroy)
    ).subscribe(page => {
      this.page = page;

      if (this.page) {
        this.schemaService.createEntitySchema('PageEntity', this.page);
      }
    })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
