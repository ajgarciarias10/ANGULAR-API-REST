import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ELBICHOComponent } from './elbicho.component';

describe('ELBICHOComponent', () => {
  let component: ELBICHOComponent;
  let fixture: ComponentFixture<ELBICHOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ELBICHOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ELBICHOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
