import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentappComponent } from './presentapp.component';

describe('PresentappComponent', () => {
  let component: PresentappComponent;
  let fixture: ComponentFixture<PresentappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
