import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoneComponent } from './cardone.component';

describe('CardoneComponent', () => {
  let component: CardoneComponent;
  let fixture: ComponentFixture<CardoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
