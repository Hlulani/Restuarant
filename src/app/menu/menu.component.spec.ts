import { TestBed, async } from '@angular/core/testing';

import {  MenuComponent } from './menu.component';
import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

describe('menu component', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

   const mockFirebaseDatabase = {
    list: jasmine.createSpy('list')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [MenuComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebaseDatabase }
      ]
    }).compileComponents();
  }));

beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

});
