import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileCardComponent } from './shared/component/mobile-card/mobile-card.component';
import { MobileCardOropComponent } from './shared/component/mobile-card-orop/mobile-card-orop.component';
import { MobileCardNoImageComponent } from './shared/component/mobile-card-no-image/mobile-card-no-image.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileCardComponent,
    MobileCardOropComponent,
    MobileCardNoImageComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
