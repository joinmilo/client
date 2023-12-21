import { Injectable, afterNextRender } from '@angular/core';
import { Store } from '@ngrx/store';
import { MediaEntity } from 'src/app/core/api/generated/schema';
import { faviconConfig } from '../constants/configuration.constants';
import { selectConfiguration } from '../state/selectors/core.selectors';

@Injectable({ providedIn: 'root' })
export class FavIconService {

  constructor(
    private store: Store,
  ) {
    afterNextRender(() => this.store.select(selectConfiguration(faviconConfig))
      .subscribe(config => {
        const favIcon = document?.querySelector('#favicon') as HTMLLinkElement;

        if (favIcon?.href && config?.media?.url) {
          favIcon.href = (config?.media as MediaEntity).url as string;
        }
      }));
  }
  
}
