import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Maybe, MediaEntity } from 'src/schema/schema';
import { mediaApi } from '../constants/core.constants';

@Directive({
  selector: '[appMedia]'
})
export class MediaDirective implements OnChanges {

  @Input()
  @HostBinding('src')
  public src?: string;

  @Input()
  public appMedia?: Maybe<MediaEntity>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes && (changes['appMedia'] || changes['src'])) {
      this.url();
    }
  }

  private url(): void {
    if (this.appMedia?.id) {
      this.src = mediaApi(this.appMedia);
    }
  }

}
