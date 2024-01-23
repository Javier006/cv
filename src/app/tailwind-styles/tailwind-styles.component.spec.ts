import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindStylesComponent } from './tailwind-styles.component';

describe('TailwindStylesComponent', () => {
  let component: TailwindStylesComponent;
  let fixture: ComponentFixture<TailwindStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TailwindStylesComponent]
    });
    fixture = TestBed.createComponent(TailwindStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
