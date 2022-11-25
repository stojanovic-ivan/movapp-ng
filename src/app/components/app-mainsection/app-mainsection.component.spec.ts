import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainsectionComponent } from './app-mainsection.component';

describe('AppMainsectionComponent', () => {
  let component: AppMainsectionComponent;
  let fixture: ComponentFixture<AppMainsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMainsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMainsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
