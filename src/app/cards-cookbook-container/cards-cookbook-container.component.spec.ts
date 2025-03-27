import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCookbookContainerComponent } from './cards-cookbook-container.component';

describe('CardsCookbookContainerComponent', () => {
  let component: CardsCookbookContainerComponent;
  let fixture: ComponentFixture<CardsCookbookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCookbookContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCookbookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
