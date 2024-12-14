import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonDirective, IgxRippleDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_COMBO_DIRECTIVES, IgxSwitchComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective } from '@infragistics/igniteui-angular';
import { IngredientSearchComponent } from './ingredient-search.component';

describe('IngredientSearchComponent', () => {
  let component: IngredientSearchComponent;
  let fixture: ComponentFixture<IngredientSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IngredientSearchComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IgxButtonDirective, IgxRippleDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_COMBO_DIRECTIVES, IgxSwitchComponent, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
