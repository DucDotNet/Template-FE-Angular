import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from '../home/home.component';
import { FlightsModule } from '../flights/flights.module';
// import {
//   ButtonModule,
//   DatetimePickerModule,
//   AvatarModule,
// } from '@hiro/base-component-ant/src/public-api';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    //AppRoutingModule,
    //DatetimePickerModule,
    //AvatarModule,
    //ButtonModule,
    FlightsModule,
    HomeModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
