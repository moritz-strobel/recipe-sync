import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecipeV2Component } from './card-recipe-v2.component';

describe('CardRecipeV2Component', () => {
  let component: CardRecipeV2Component;
  let fixture: ComponentFixture<CardRecipeV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRecipeV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRecipeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
