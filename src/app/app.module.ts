import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MobileCardOropComponent } from './shared/component/mobile-card-orop/mobile-card-orop.component';

import { LazyLoadImageDirective } from './shared/directive/lazy-load-image.directive';
import { NgOptimizedImage } from '@angular/common';
import { HighlightTextComponent } from './shared/component/highlight-text/highlight-text.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,

    MobileCardOropComponent,

    LazyLoadImageDirective,
     HighlightTextComponent,
     HighlightDirective,

  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
