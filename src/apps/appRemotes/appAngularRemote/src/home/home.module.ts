import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HOME_ROUTES } from './home.routes';
// import {
//   ButtonModule,
//   DatetimePickerModule,
//   AvatarModule,
// } from '@hiro/base-component-ant/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    //AppRoutingModule,
    //DatetimePickerModule,
    //AvatarModule,
    //ButtonModule,
    RouterModule.forChild(HOME_ROUTES),
  ],
  declarations: [HomeComponent],
  //providers: [],
  //bootstrap: [HomeComponent],
})
export class HomeModule {}
