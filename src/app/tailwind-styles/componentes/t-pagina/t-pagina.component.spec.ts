import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPaginaComponent } from './t-pagina.component';

describe('TPaginaComponent', () => {
  let component: TPaginaComponent;
  let fixture: ComponentFixture<TPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TPaginaComponent]
    });
    fixture = TestBed.createComponent(TPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
