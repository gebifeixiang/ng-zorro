import {Component, TemplateRef, ViewChild} from '@angular/core';
import {
  NzDropdownContextComponent,
  NzDropdownService,
  NzFormatEmitEvent,
  NzTreeComponent,
  NzTreeNode
} from 'ng-zorro-antd';

@Component({
  selector: 'zorro-tree',
  templateUrl: './zorro-tree.component.html',
  styleUrls: ['./zorro-tree.component.scss']
})
export class ZorroTreeComponent {

  @ViewChild('treeCom') treeCom: NzTreeComponent;
  dropdown: NzDropdownContextComponent;
  // actived node
  activedNode: NzTreeNode;

  nodes = [{
    title: 'parent 0',
    key: '100',
    author: 'NG ZORRO',
    expanded: true,
    children: [
      {title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true},
      {title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true}
    ]
  }, {
    title: 'parent 1',
    key: '101',
    author: 'NG ZORRO',
    children: [
      {title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true},
      {title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true}
    ]
  }];

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      data.node.isExpanded = !data.node.isExpanded;
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    if (this.activedNode) {
      // delete selectedNodeList(u can do anything u want)
      this.treeCom.nzTreeService.setSelectedNodeList(this.activedNode);
    }
    data.node.isSelected = true;
    this.activedNode = data.node;
    // add selectedNodeList
    this.treeCom.nzTreeService.setSelectedNodeList(this.activedNode);
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  selectDropdown(type: string): void {
    this.dropdown.close();
    // do something
  }

  constructor(private nzDropdownService: NzDropdownService) {
  }

}
