import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { TempComponent } from './temp.component';

describe('TempComponent', () => {
  let component: TempComponent;
  let fixture: ComponentFixture<TempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TempComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
