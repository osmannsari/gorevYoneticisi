import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunlukComponent } from './gunluk.component';

describe('GunlukComponent', () => {
  let component: GunlukComponent;
  let fixture: ComponentFixture<GunlukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunlukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunlukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
