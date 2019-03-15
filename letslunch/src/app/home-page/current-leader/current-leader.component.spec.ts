import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLeaderComponent } from './current-leader.component';

describe('CurrentLeaderComponent', () => {
  let component: CurrentLeaderComponent;
  let fixture: ComponentFixture<CurrentLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
