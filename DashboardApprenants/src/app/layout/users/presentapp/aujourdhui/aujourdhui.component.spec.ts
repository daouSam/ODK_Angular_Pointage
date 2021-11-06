import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AujourdhuiComponent } from './aujourdhui.component';

describe('AujourdhuiComponent', () => {
  let component: AujourdhuiComponent;
  let fixture: ComponentFixture<AujourdhuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AujourdhuiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AujourdhuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
