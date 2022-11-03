import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDataTableComponent } from './player-data-table.component';

describe('PlayerDataTableComponent', () => {
  let component: PlayerDataTableComponent;
  let fixture: ComponentFixture<PlayerDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
