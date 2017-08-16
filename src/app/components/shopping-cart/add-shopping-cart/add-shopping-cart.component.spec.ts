import { TestBed, async } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddShoppingCartComponent } from 'app/components/shopping-cart/add-shopping-cart/add-shopping-cart.component';
import { MenuService } from 'app/services/menu.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('add shopping cart component', () => {
  let component: AddShoppingCartComponent;
  let fixture: ComponentFixture<AddShoppingCartComponent>;
  let nextButton: DebugElement;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockFirebaseDatabase = {
    list: jasmine.createSpy('list')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AddShoppingCartComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebaseDatabase }, MenuService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nextButton = fixture.debugElement.query(By.css('#add-to-cart'));
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should add to cart', () => {
    expect(component.addToCart('menu')).toBe('menu');
  });

});
