/* eslint-disable @typescript-eslint/no-explicit-any */
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
        .subscribe(aside => {
          if (aside) {
            this.viewContainer.clear();
  
            const component = this.viewContainer
              .createComponent(aside.component)
              .instance as any;
            
            if (aside.params) {
              Object.entries(aside.params).forEach(([key, value]) => {
                component[key] = value;
              })
            }
          }
        });
    }


  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
