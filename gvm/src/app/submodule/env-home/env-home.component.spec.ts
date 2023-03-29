import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvHomeComponent } from './env-home.component';

describe('EnvHomeComponent', () => {
  let component: EnvHomeComponent;
  let fixture: ComponentFixture<EnvHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
