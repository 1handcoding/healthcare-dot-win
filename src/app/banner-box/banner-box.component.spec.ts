import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBoxComponent } from './banner-box.component';

describe('BannerBoxComponent', () => {
  let component: BannerBoxComponent;
  let fixture: ComponentFixture<BannerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
