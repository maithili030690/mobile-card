import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardOropComponent } from './mobile-card-orop.component';

describe('MobileCardOropComponent', () => {
  let component: MobileCardOropComponent;
  let fixture: ComponentFixture<MobileCardOropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCardOropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCardOropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
