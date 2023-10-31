import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';
import { Maybe, MediaEntity, PageEntity } from 'src/app/core/api/generated/schema';
import { PortalLandingActions } from '../state/portal-landing.actions';
import { selectLandingPage } from '../state/portal-landing.selectors';
import { TranslationService } from 'src/app/core/services/translation.service';

@Component({
  selector: 'app-portal-landing',
  templateUrl: './portal-landing.component.html',
  styleUrls: ['./portal-landing.component.scss'],
})
export class PortalLandingComponent implements OnInit, OnDestroy {

  private destroy = new Subject<void>();

  public page?: Maybe<PageEntity>;

  public media?: Maybe<MediaEntity> | undefined;

  constructor(
    private store: Store,
    private translationService: TranslationService

  ) { }

  ngOnInit(): void {
    this.store.select(selectLandingPage)
    .pipe(
      tap(landing => !landing?.id
        && this.store.dispatch(PortalLandingActions.getLandingPage())),
      takeUntil(this.destroy)
    ).subscribe(page => {
      this.page = page;
      this.media = page?.uploads?.find(upload => upload?.title)?.media;

      this.translationService.translatable(this.page?.translatables, 'name')
        .pipe(takeUntil(this.destroy))
        .subscribe(title => this.resize2fit(title));
    });
  }
  
  private resize2fit(title: Maybe<string>): void {
    const container = document.querySelector<HTMLElement>("#container");
    if (!container || !title) return;
    container.children[0].textContent = title ?? null;
    container.style.setProperty('font-size', "1em");
    const {width, height} = container.children[0].getBoundingClientRect();
    const {width: max_width, height: max_height} = container.getBoundingClientRect();
    const fontSize = Math.min(max_width/width, max_height/height);
    container.style.setProperty('font-size', fontSize + "em");
    container.style.setProperty('line-height', 9 * fontSize + "rem");
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
