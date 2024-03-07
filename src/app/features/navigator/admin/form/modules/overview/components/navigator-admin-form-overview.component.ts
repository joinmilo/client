import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Store } from '@ngrx/store';
import { TranslationService } from 'ngx-cinlib/i18n';
import { NavigatorChoiceEntity, NavigatorPageEntity } from 'src/app/core/api/generated/schema';
import { NavigatorAdminFormOverviewActions } from '../state/navigator-admin-form-overview.actions';
import { selectStartPage } from '../state/navigator-admin-form-overview.selectors';

interface TreeNode {
  item: NavigatorPageEntity | NavigatorChoiceEntity,
  children?: TreeNode[],
}

interface FlatNode {
  expandable: boolean,
  item: NavigatorPageEntity | NavigatorChoiceEntity,
  level: number,
}

const TREE_DATA: TreeNode[] = [];

@Component({
  selector: 'app-navigator-admin-form-overview',
  templateUrl: './navigator-admin-form-overview.component.html',
  styleUrls: ['./navigator-admin-form-overview.component.scss']
})
export class NavigatorAdminFormOverviewComponent  implements OnInit {

getNextPage() {

}

pageDetails() {
throw new Error('Method not implemented.');
}

  constructor(private store: Store, private translationService: TranslationService) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    this.store.dispatch(NavigatorAdminFormOverviewActions.getStartPage());
    this.store.select(selectStartPage).subscribe(page => {
      if (page) {
        const children = page.choices?.map((choice) => ({
          item: choice!,
          children: choice?.nextPage ? [{item: choice?.nextPage!}] : undefined
        })) ?? [];
        const treeNode: TreeNode = {
          item: page!,
          children: children
        };
        this.dataSource.data = [...this.dataSource.data, treeNode];
      }
    });
  }
 
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  private transformer = (node: TreeNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      item: node.item,
      level: level
    }
  }

  private treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;
}