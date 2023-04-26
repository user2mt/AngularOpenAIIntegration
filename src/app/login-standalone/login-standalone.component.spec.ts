import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStandaloneComponent } from './login-standalone.component';

describe('LoginStandaloneComponent', () => {
  let component: LoginStandaloneComponent;
  let fixture: ComponentFixture<LoginStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LoginStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
