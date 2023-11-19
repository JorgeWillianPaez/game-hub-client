import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvedoraComponent } from './desenvolvedora.component';

describe('DesenvolvedoraComponent', () => {
  let component: DesenvolvedoraComponent;
  let fixture: ComponentFixture<DesenvolvedoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesenvolvedoraComponent]
    });
    fixture = TestBed.createComponent(DesenvolvedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
