import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';

@Component({
  selector: 'app-mobile-card-no-image',
  templateUrl: './mobile-card-no-image.component.html',
  styleUrls: ['./mobile-card-no-image.component.scss']
})
export class MobileCardNoImageComponent implements OnInit {
  @Input() mobileObj!:Imobile
  constructor() { }

  ngOnInit(): void {
  }

}
