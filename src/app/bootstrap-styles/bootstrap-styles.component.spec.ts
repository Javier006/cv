import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapStylesComponent } from './bootstrap-styles.component';

describe('BootstrapStylesComponent', () => {
  let component: BootstrapStylesComponent;
  let fixture: ComponentFixture<BootstrapStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapStylesComponent]
    });
    fixture = TestBed.createComponent(BootstrapStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
