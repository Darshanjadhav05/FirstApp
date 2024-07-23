import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDatadindingComponent } from './two-way-datadinding.component';

describe('TwoWayDatadindingComponent', () => {
  let component: TwoWayDatadindingComponent;
  let fixture: ComponentFixture<TwoWayDatadindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayDatadindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayDatadindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
