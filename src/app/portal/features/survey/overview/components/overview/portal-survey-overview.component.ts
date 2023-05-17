import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CardData, CardType } from "src/app/shared/card/typings/card";
import { PageableList, SortPaginate } from "src/app/shared/table/typings/table";
import { SurveyEntity } from "src/schema/schema";
import { PortalSurveyOverviewActions } from "../../state/portal-survey-overview.actions";
import { selectSurveys } from "../../state/portal-survey-overview.selectors";

@Component({
  selector: 'app-portal-survey-overview',
  templateUrl: './portal-survey-overview.component.html',
  styleUrls: ['./portal-survey-overview.component.scss'],
})
export class PortalSurveyOverviewComponent<T> {
  public surveys = this.store.select(selectSurveys);

  public title?: string;

  public types = {
    contact: CardType.Contact,
  };

  @Input()
  public entity?: SurveyEntity;

  @Input()
  public data?: CardData;

  constructor(private store: Store) {
    this.store.dispatch(PortalSurveyOverviewActions.getSurveys());
  }

  @Input()
  public dataS?: Observable<PageableList<T> | undefined>;

  @Output()
  public sortPaginate = new EventEmitter<SortPaginate>();

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;

  @ViewChild(MatSort)
  public sort!: MatSort;
}