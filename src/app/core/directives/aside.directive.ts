import { Directive, OnDestroy, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectAsideComponent } from '../state/selectors/core.selectors';

@Directive({
  selector: '[appAside]'
})
export class AsideDirective implements OnDestroy {

  private destroy = new Subject<void>();

  constructor(
    private store: Store,
    private viewContainer: ViewContainerRef) {
      this.store.select(selectAsideComponent)
        .pipe(takeUntil(this.destroy))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .subscribe((component: any) => {
          if (component) {
            this.viewContainer.clear();
  
            this.viewContainer
              .createComponent(component);
          }
        });
    }


  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
