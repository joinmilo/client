import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { collapse } from 'src/app/core/animations/animations';
import { Maybe } from 'src/app/core/api/generated/schema';
import { CoreModule } from 'src/app/core/core.module';
import { IconComponent } from '../../widgets/icons/icon.component';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.scss'],
  animations: [
     collapse()
  ],
  standalone: true,
  imports: [
    CommonModule,
    CoreModule,
    IconComponent,
    MatCardModule,
    MatButtonModule,
  ]
})
export class FilterAreaComponent {

  @Input()
  public filtersActive?: Maybe<boolean>;

  @Output()
  public filtersCleared = new EventEmitter<void>();

  public filtersCollapsed = true;

  public clearFilters(): void {
    this.filtersCleared.emit();
  }

}