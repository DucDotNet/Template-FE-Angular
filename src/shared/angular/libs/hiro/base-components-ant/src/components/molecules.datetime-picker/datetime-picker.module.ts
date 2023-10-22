import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import DatetimePicker from './datetime-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule, NzDatePickerModule, NzTimePickerModule],
  declarations: [DatetimePicker],
  exports: [DatetimePicker],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DatetimePickerModule {}
