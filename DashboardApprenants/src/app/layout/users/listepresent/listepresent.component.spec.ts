import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepresentComponent } from './listepresent.component';

describe('ListepresentComponent', () => {
  let component: ListepresentComponent;
  let fixture: ComponentFixture<ListepresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepresentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
