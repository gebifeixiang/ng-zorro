import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SystemServcie} from '../../../shared/api/index';

@Component({
  selector: 'demo-i18n',
  templateUrl: './demo-i18n.component.html',
  styleUrls: ['./demo-i18n.component.scss'],
})

export class DemoI18nComponent implements OnInit {


  name: string;
  pwd: string;

  lists: any[] = [];

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private systemServcie: SystemServcie) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


  submit() {
    this.systemServcie.getSystemMaintenances(1).subscribe((res) => {
      if (res.status === "OK") {
        this.lists = res.result.data;
        console.log(this.lists);
      }
    })
  }


  update(item: any) {
    item.creater = "AAAAAAAA";
  }
}
