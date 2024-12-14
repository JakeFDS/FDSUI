import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTemplateComponent } from './responsive-template.component';

describe('ResponsiveTemplateComponent', () => {
  let component: ResponsiveTemplateComponent;
  let fixture: ComponentFixture<ResponsiveTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
