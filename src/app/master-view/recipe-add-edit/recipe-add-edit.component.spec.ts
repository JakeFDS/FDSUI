import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSwitchComponent, IGX_SIMPLE_COMBO_DIRECTIVES } from '@infragistics/igniteui-angular';
import { RecipeAddEditComponent } from './recipe-add-edit.component';

describe('RecipeAddEditComponent', () => {
  let component: RecipeAddEditComponent;
  let fixture: ComponentFixture<RecipeAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RecipeAddEditComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IGX_DIALOG_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxSwitchComponent, IGX_SIMPLE_COMBO_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
