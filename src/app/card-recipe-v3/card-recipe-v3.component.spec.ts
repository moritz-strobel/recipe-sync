import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecipeV3Component } from './card-recipe-v3.component';

describe('CardRecipeV3Component', () => {
  let component: CardRecipeV3Component;
  let fixture: ComponentFixture<CardRecipeV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRecipeV3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRecipeV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
