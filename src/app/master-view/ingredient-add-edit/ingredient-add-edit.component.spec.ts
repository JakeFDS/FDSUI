import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSwitchComponent } from '@infragistics/igniteui-angular';
import { IngredientAddEditComponent } from './ingredient-add-edit.component';

describe('IngredientAddEditComponent', () => {
  let component: IngredientAddEditComponent;
  let fixture: ComponentFixture<IngredientAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IngredientAddEditComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
