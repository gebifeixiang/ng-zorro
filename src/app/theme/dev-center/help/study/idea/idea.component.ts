import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'study-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss'],
})


export class IdeaComponent implements OnInit {

  ideas = [
    {
      key: 'Ctrl+Shift + Enter',
      remark: '语句完成'
    },
    {
      key: 'Ctrl+E',
      remark: '最近的文件'
    }, {
      key: 'Ctrl+Shift+E',
      remark: '最近更改的文件'
    }, {
      key: 'Shift+Click',
      remark: '可以关闭文件'
    }, {
      key: 'Ctrl+[ OR ]',
      remark: '跑到大括号的开头与结尾'
    }
  ];

  constructor() {

  }


  ngOnInit() {
  }


}
