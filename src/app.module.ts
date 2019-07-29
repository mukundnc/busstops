import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './components/Routes';
import { AppComponent } from './components/App';
import { CalculatePipe } from './models/calculatepipe';
import { BusStopsComponent } from './components/BusStops';
import { DonationComponent } from './components/Donation';
import { ErrorComponent } from './components/Error';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyService } from './services/myservice';

@NgModule({
  declarations: [
    AppComponent,
    CalculatePipe,
    BusStopsComponent,
    DonationComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
