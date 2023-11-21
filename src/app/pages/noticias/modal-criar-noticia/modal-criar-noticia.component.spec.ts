import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarNoticiaComponent } from './modal-criar-noticia.component';

describe('ModalCriarNoticiaComponent', () => {
  let component: ModalCriarNoticiaComponent;
  let fixture: ComponentFixture<ModalCriarNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCriarNoticiaComponent]
    });
    fixture = TestBed.createComponent(ModalCriarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
