import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {I18nServcie, SystemServcie} from '../../../../shared/api/index';
import {ApiResult, SystemBase} from '../../../../shared/model/index';
import {
  NzDropdownContextComponent,
  NzDropdownService,
  NzFormatEmitEvent,
  NzMessageService,
  NzModalService,
  NzNotificationService,
  NzTreeComponent
} from 'ng-zorro-antd';


@Component({
  selector: 'dev-center-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss'],
})


export class I18nComponent implements OnInit {

  @ViewChild('treeCom') treeCom: NzTreeComponent;
  dropdown: NzDropdownContextComponent;

  public systemId: number;
  public systembase: SystemBase = null;

  visible = false;

  locales: any[];
  nodes = [];
  values = [];

  selecedLangs = [];

  inputValue: string;
  isLoading: boolean = false;
  leftWidth: number = 400;

  drawerType: string;
  drawerTitle: string;
  isAddNode: boolean = false;
  isAddLang: boolean = false;
  isDeleteNode: boolean = false;
  selecedNodeName: string = '';

  public selecedNode: Node;
  private selecedValue: Value;
  private selecedEvent: NzFormatEmitEvent;

  public addNodeValidateForm: FormGroup;
  public addValueValidateForm: FormGroup;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private systemServcie: SystemServcie,
              private fb: FormBuilder,
              private notification: NzNotificationService,
              private modalService: NzModalService,
              private msg: NzMessageService,
              private nzDropdownService: NzDropdownService,
              private i18nServcie: I18nServcie) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.systemId = params['systemId'];
      if (this.systemId) {
        this.systemServcie.getSystemBaseById(this.systemId).subscribe((res: ApiResult) => {
          if (res.status === 'OK') {
            this.systembase = res.result.data;
          } else {

          }
        });
      }

    });

    this.addNodeValidateForm = this.fb.group({
      type: '',
      name: '',
      code: ''
    });
    this.addValueValidateForm = this.fb.group({
      localeId: '',
      value: ''
    });

    this.queryNodeTrees();
    this.queryLocales();
  }

  nzEvent(event: NzFormatEmitEvent): void {
    this.selecedEvent = event;
    console.log(event);
    let json: any = event.node.origin;
    let id: string = json.id;
    let code: string = json.code;
    let type: string = json.type;
    let parentId: string = json.parentId;
    this.selecedNode = new Node().toNode(json);
    this.selecedNodeName = this.getNodeName(this.selecedEvent.node);

    if (type === 'node' && parentId) {
      this.isAddNode = true;
      this.isAddLang = false;
      this.isDeleteNode = true;
    } else if (type === 'attr') {
      this.isAddNode = false;
      this.isAddLang = true;
      this.isDeleteNode = true;
    } else {
      this.isDeleteNode = false;
    }
    if (type === 'node') {
      return;
    }
    this.isLoading = true;
    this.i18nServcie.getValue(id).subscribe((res) => {
      this.isLoading = false;
      if (res.status === 'OK') {
        this.values = res.result.data;
      } else {

      }
    });
  }

  onClickTree(event: NzFormatEmitEvent) {
    console.log(event);
  }

  onDbClickTree(event: NzFormatEmitEvent) {
    console.log(event);
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  onClickAddNode() {
    let code = this.addNodeValidateForm.value.code;
    let type = this.addNodeValidateForm.value.type;
    let name = this.addNodeValidateForm.value.name;

    let body: any = {
      id: '',
      code: code,
      name: name,
      parentId: this.selecedNode.id,
      systemId: this.selecedNode.systemId,
      type: type,
      createTime: null,
      lastModifyTime: null
    };

    this.i18nServcie.addNode(body).subscribe((res) => {
      if (res.status === 'OK') {
        this.close();
        this.notification.create('success', '成功', '成功的创建一个节点');
        let node = res.result;
        this.selecedEvent.node.addChildren([{
          title: node.name,
          key: node.id,
          id: node.id,
          type: node.type,
          code: node.code,
          systemId: node.systemId,
          parentId: node.parentId,
          expanded: true,
          children: []
        }], 0);
      } else {
        this.notification.create('error', '失败', res.result);
      }
    });

  }

  onClickDeleteNode() {
    this.modalService.confirm({
      nzTitle: '你确定要删除该属性?',
      nzContent: '<b style="color: red;">功能正在开发中...........</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => console.log('OK'),
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  onClickEditNode() {

  }

  onClickAddValue() {
    let localeId = this.addValueValidateForm.value.localeId;
    let value = this.addValueValidateForm.value.value;
    let nodeId = this.selecedNode.id;
    let body: any = {
      localeId: localeId,
      value: value,
      nodeId: nodeId,
      createTime: null,
      lastModifyTime: null,
    };

    console.log(body);

    this.i18nServcie.addValue(body).subscribe((res) => {
      if (res.status === 'OK') {
        this.close();
        this.notification.create('success', '成功', '成功的创建节点语言');
        this.nzEvent(this.selecedEvent);
      } else {
        this.notification.create('error', '失败', res.result);
      }
    });
  }

  onClickEditValue(value: any) {
    this.selecedValue = value;
    this.open('editValue');
  }

  open(type: 'addNode' | 'editNode' | 'addValue' | 'editValue'): void {
    this.drawerTitle = '';
    //this.dropdown.close();

    if (type == 'addNode') {
      this.drawerTitle = '新增节点';
    } else if (type == 'editNode') {
      this.drawerTitle = '修改节点';
    } else if (type == 'addValue') {
      this.drawerTitle = '新增语言';
    } else if (type == 'editValue') {
      this.drawerTitle = '修改语言';
    } else {

    }
    this.visible = true;
    this.drawerType = type;
  }

  close(): void {
    this.drawerType = '';
    this.visible = false;
  }


  private queryNodeTrees() {
    this.i18nServcie.getNodesTree(this.systemId).subscribe((res) => {
      if (res.status === 'OK') {
        this.nodes = this.toTree(res.result.data);
        console.log(this.nodes);
      } else {

      }
    });
  }

  //递归重构树节点
  private toTree(nodes: any[]) {
    let trees = [];
    for (let i = 0; i < nodes.length; i++) {
      this.findChildren(trees, nodes[i]);
    }
    return trees;
  }

  private findChildren(trees: any[], node: any) {
    let tree: any = {
      title: node.name,
      name: node.name,
      key: node.id,
      id: node.id,
      type: node.type,
      code: node.code,
      systemId: node.systemId,
      parentId: node.parentId,
      expanded: true,
      children: []
    };
    trees.push(tree);
    if (node.children && node.children.length > 0) {
      for (let i = 0; i < node.children.length; i++) {
        this.findChildren(tree.children, node.children[i]);
      }
    }
  }

  private queryLocales() {
    this.locales = [];
    this.i18nServcie.getLocales(this.systemId).subscribe((res) => {
      if (res.status === 'OK') {
        let lists = res.result.data;
        for (let i = 0; i < lists.length; i++) {
          if (lists[i].status == 1) {
            this.locales.push(lists[i]);
          }
        }
      } else {

      }
    });
  }

  private getNodeName(node: any) {
    let parentNode: any = node.parentNode;
    let name: string = node.origin.name;
    while (parentNode != null) {
      name = parentNode.origin.name + '.' + name;
      parentNode = parentNode.parentNode;
    }
    return name;
  }
}

export class Node {
  id: string;
  name: string;
  parentId: string;
  systemId: string;
  type: string;
  createTime: string;
  lastModifyTime: string;

  toNode(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.parentId = json.parentId;
    this.systemId = json.systemId;
    this.type = json.type;
    this.createTime = json.createTime;
    this.lastModifyTime = json.lastModifyTime;
    return this;
  }

}

export class Value {
  area: string;
  createTime: string;
  lang: string;
  lastModifyTime: string;
  localeId: string;
  nodeId: string;
  remark: string;
  value: string;

  toValue(json: any) {
    this.area = json.area;
    this.createTime = json.createTime;
    this.lang = json.lang;
    this.lastModifyTime = json.lastModifyTime;
    this.localeId = json.localeId;
    this.nodeId = json.nodeId;
    this.remark = json.remark;
    this.value = json.value;
    return this;
  }
}
