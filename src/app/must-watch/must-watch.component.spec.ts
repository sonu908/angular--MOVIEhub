import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MustWatchComponent } from './must-watch.component';

describe('MustWatchComponent', () => {
  let component: MustWatchComponent;
  let fixture: ComponentFixture<MustWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MustWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MustWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
