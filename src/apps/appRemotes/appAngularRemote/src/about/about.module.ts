import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutComponent],
  providers: [],
  bootstrap: [AboutComponent],
})
export class AboutModule {}
