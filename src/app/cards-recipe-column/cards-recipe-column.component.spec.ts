import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRecipeColumnComponent } from './cards-recipe-column.component';

describe('CardsRecipeColumnComponent', () => {
  let component: CardsRecipeColumnComponent;
  let fixture: ComponentFixture<CardsRecipeColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsRecipeColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsRecipeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
