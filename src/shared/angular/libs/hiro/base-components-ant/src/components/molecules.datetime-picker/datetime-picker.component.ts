import { Component, OnInit, Input } from '@angular/core';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'vsvn-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
})
export default class DatetimePickerComponent implements OnInit {
  date: Date = new Date();
  isEnglish = true;

  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(en_US);
  }

  onChange(result: any): void {
    console.log('onChange: ', result);
  }

  ngOnInit(): void {}
}
