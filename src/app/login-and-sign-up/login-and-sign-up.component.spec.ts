import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginAndSignUpComponent } from './login-and-sign-up.component';

describe('LoginAndSignUpComponent', () => {
  let component: LoginAndSignUpComponent;
  let fixture: ComponentFixture<LoginAndSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LoginAndSignUpComponent, NoopAnimationsModule, FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
