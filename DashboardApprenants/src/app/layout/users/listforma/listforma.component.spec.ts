import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListformaComponent } from './listforma.component';

describe('ListformaComponent', () => {
  let component: ListformaComponent;
  let fixture: ComponentFixture<ListformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListformaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
