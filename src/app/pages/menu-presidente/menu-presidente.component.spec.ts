import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPresidenteComponent } from './menu-presidente.component';

describe('MenuPresidenteComponent', () => {
  let component: MenuPresidenteComponent;
  let fixture: ComponentFixture<MenuPresidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPresidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPresidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
