import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsPortalComponent } from './claims-portal.component';

describe('ClaimsPortalComponent', () => {
  let component: ClaimsPortalComponent;
  let fixture: ComponentFixture<ClaimsPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
