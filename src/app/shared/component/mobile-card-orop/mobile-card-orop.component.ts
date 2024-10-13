import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../../models/mobile';

@Component({
  selector: 'app-mobile-card-orop',
  templateUrl: './mobile-card-orop.component.html',
  styleUrls: ['./mobile-card-orop.component.scss']
})
export class MobileCardOropComponent implements OnInit {
  @Input() mobileObj!:Imobile
  constructor() { }

  ngOnInit(): void {
  }

}
