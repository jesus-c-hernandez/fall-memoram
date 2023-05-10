import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let ele: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    ele = fixture.debugElement;
  });

  it('should create the TitleComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title of the app', () => {
    const textFall = 'FALL';
    const textMemo = 'MEMORAM';

    fixture.detectChanges();

    const mainTitle = ele.queryAll(By.css('.main-title'));
    const mainTitleSec = ele.queryAll(By.css('.main-title-sec'));
    const mainTitleFront = ele.queryAll(By.css('.main-title-front'));
    const img = ele.queryAll(By.css('.img-fall'));

    expect(mainTitle.length).toBeGreaterThan(0);
    expect(mainTitleSec.length).toBeGreaterThan(0);
    expect(mainTitleFront.length).toBe(2);
    expect(img.length).toBeGreaterThan(0);

    expect(mainTitle[0].nativeElement.textContent).toBe(textFall);
    expect(mainTitleSec[0].nativeElement.textContent).toBe(textMemo);
    expect(mainTitleFront[0].nativeElement.textContent).toBe(textFall);
    expect(mainTitleFront[1].nativeElement.textContent).toBe(textMemo);
    expect(img[0].nativeElement.src).toContain('/assets/img/cara.png');
  });
});
