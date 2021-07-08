import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhtpDemoComponent } from './hhtp-demo.component';

describe('HhtpDemoComponent', () => {
  let component: HhtpDemoComponent;
  let fixture: ComponentFixture<HhtpDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhtpDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HhtpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
