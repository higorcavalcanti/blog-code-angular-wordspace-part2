import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNameComponent } from './lib-name.component';

describe('LibNameComponent', () => {
  let component: LibNameComponent;
  let fixture: ComponentFixture<LibNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
