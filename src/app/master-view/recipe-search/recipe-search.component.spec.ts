import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_COMBO_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES } from '@infragistics/igniteui-angular';
import { RecipeSearchComponent } from './recipe-search.component';

describe('RecipeSearchComponent', () => {
  let component: RecipeSearchComponent;
  let fixture: ComponentFixture<RecipeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RecipeSearchComponent, NoopAnimationsModule, FormsModule, RouterTestingModule, HttpClientTestingModule, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_COMBO_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_DIALOG_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
