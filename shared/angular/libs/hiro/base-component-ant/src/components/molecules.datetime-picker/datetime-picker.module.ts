import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import DatetimePicker from './datetime-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DatetimePicker],
  exports: [DatetimePicker],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DatetimePickerModule {}
