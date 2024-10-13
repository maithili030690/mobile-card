import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCardNoImageComponent } from './mobile-card-no-image.component';

describe('MobileCardNoImageComponent', () => {
  let component: MobileCardNoImageComponent;
  let fixture: ComponentFixture<MobileCardNoImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCardNoImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCardNoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
