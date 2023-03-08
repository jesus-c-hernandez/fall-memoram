import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleScoresComponent } from './title-scores.component';

describe('TitleScoresComponent', () => {
  let component: TitleScoresComponent;
  let fixture: ComponentFixture<TitleScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
