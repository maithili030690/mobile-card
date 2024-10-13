import { Component } from '@angular/core';
import { Imobile } from './shared/models/mobile';
import { mobileProducts } from './shared/consts/mobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobile-card';

  mobileData=mobileProducts
}
