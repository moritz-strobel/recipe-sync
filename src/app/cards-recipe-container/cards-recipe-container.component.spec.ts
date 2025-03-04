import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRecipeContainerComponent } from './cards-recipe-container.component';

describe('CardsRecipeContainerComponent', () => {
  let component: CardsRecipeContainerComponent;
  let fixture: ComponentFixture<CardsRecipeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsRecipeContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsRecipeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
