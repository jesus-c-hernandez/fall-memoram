import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFinishGameComponent } from './modal-finish-game.component';

describe('ModalFinishGameComponent', () => {
  let component: ModalFinishGameComponent;
  let fixture: ComponentFixture<ModalFinishGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFinishGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFinishGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
