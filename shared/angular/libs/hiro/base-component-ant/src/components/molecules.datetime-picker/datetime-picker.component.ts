import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vsvn-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
})
export default class DatetimePickerComponent implements OnInit {
  @Input() date: Date = new Date();

  constructor() {}

  onChange(result: any): void {
    console.log('onChange: ', result);
  }

  ngOnInit(): void {}
}
