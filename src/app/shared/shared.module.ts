import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';

import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api/index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    ApiService
  ]
})
export class SharedModule {
}
