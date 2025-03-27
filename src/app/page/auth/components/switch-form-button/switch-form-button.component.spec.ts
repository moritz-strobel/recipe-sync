import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchFormButtonComponent } from './switch-form-button.component';

describe('SwitchFormButtonComponent', () => {
    let component: SwitchFormButtonComponent;
    let fixture: ComponentFixture<SwitchFormButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SwitchFormButtonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SwitchFormButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
