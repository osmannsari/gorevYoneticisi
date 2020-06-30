import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AylikComponent } from './aylik.component';

describe('AylikComponent', () => {
  let component: AylikComponent;
  let fixture: ComponentFixture<AylikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AylikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AylikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
