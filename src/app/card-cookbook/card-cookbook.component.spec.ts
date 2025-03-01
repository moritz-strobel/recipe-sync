import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCookbookComponent } from './card-cookbook.component';

describe('CardCookbookComponent', () => {
  let component: CardCookbookComponent;
  let fixture: ComponentFixture<CardCookbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCookbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCookbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
