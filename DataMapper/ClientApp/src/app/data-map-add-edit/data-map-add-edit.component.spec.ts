import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMapAddEditComponent } from './data-map-add-edit.component';

describe('DataMapAddEditComponent', () => {
  let component: DataMapAddEditComponent;
  let fixture: ComponentFixture<DataMapAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMapAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMapAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
