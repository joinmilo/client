import { Component, Input, OnDestroy } from '@angular/core';
import { TranslationService } from 'ngx-cinlib/i18n';
import { Subject, takeUntil } from 'rxjs';
import { Maybe, PageEmbeddingEntity } from 'src/app/core/api/generated/schema';
import { PageEmbeddingAttributes } from '../../typings/page-embedding';
import { mapEmbeddingToAttributes } from '../../utils/portal-page-embeddings.utils';

@Component({
  selector: 'app-portal-page-embedding-hero',
  templateUrl: './portal-page-embedding-hero.component.html',
  styleUrls: ['./portal-page-embedding-hero.component.scss'],
})
export class PortalPagEmbeddingHeroComponent implements OnDestroy {

  @Input({ required: true })
  public set embeddings(embeddings: Maybe<Maybe<PageEmbeddingEntity>[]>) {
    this.element = mapEmbeddingToAttributes(embeddings?.[0]);

    this.translationService.translatable(this.element?.title, 'translatable')
      .pipe(takeUntil(this.destroy))
      .subscribe(title => this.resizeTitleElement(title));
  }

  public element?: Maybe<PageEmbeddingAttributes>;

  private destroy = new Subject<void>();

  constructor(
    private translationService: TranslationService,
  ) {}
  
  private resizeTitleElement(title: Maybe<string>): void {
    const container = document.querySelector<HTMLElement>('#container');
    if (container && title) {
      container.children[0].textContent = title ?? null;
      container.style.setProperty('font-size', '1em');

      const {width, height} = container.children[0].getBoundingClientRect();
      const {width: max_width, height: max_height} = container.getBoundingClientRect();

      const fontSize = Math.min(max_width / width, max_height / height);

      container.style.setProperty('font-size', fontSize + 'em');
      container.style.setProperty('line-height', 9 * fontSize + 'rem');
    }
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
