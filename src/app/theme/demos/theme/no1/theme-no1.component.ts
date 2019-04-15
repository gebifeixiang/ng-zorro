import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'theme-no1',
  templateUrl: './theme-no1.component.html',
  styleUrls: ['./theme-no1.component.scss'],
})

export class No1Component implements OnInit {


  public isCollapsed: boolean = false;
  public themeLeftWidth: number = 240;

  constructor(public translate: TranslateService) {
  }


  ngOnInit() {

  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.themeLeftWidth = this.isCollapsed ? 80 : 240;
  }

}
