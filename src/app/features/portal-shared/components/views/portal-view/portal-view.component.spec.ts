import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalViewComponent } from './portal-view.component';

describe('PortalViewComponent', () => {
  let component: PortalViewComponent;
  let fixture: ComponentFixture<PortalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
