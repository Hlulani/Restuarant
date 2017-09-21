import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddShoppingCartComponent } from 'app/components/shopping-cart/add-shopping-cart/add-shopping-cart.component';
import { MenuService } from 'app/services/menu.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from "rxjs/Subject";

fdescribe('add shopping cart component', () => {
  let component: AddShoppingCartComponent;
  let fixture: ComponentFixture<AddShoppingCartComponent>;
  let nextButton: DebugElement;


  const mockMenuService = {
    getMenus: () => Observable.of([
      { description: 'First', price: 32, quantity: 5 },
      { description: 'Second', price: 76, quantity: 9 },

    ]),
    add: jasmine.createSpy('add'),

    cartObserver: () => Subject.of({ totalQuantity: 9 })


  };
  const mockRouter = {
    navigate: jasmine.createSpy('navigateTo')
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [AddShoppingCartComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: MenuService, useValue: mockMenuService },


      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nextButton = fixture.debugElement.query(By.css('#add-to-cart'));
  });

  fit('should calculate the total quantity', fakeAsync(() => {
    tick();
    fixture.detectChanges();
    console.log('test ' + component);
    expect(this.menuService.cartObserver.subscribe).toBeGreaterThanOrEqual(9);
    // expect(component.totalQuantity).toBe('cartObserver');
  }));

  describe('when the component loads', () => {
    it('should load the menu items', fakeAsync(() => {
      tick();
      fixture.detectChanges();
      const menuItems = fixture.debugElement.queryAll(By.css('.menu-item'));
      expect(menuItems.length).toEqual(2);
      expect(menuItems[0].query(By.css('.description')).nativeElement.textContent.trim()).toEqual('First');
      expect(menuItems[0].query(By.css('.price')).nativeElement.textContent.trim()).toEqual('R 32');
      expect(menuItems[1].query(By.css('.description')).nativeElement.textContent.trim()).toEqual('Second');
      expect(menuItems[1].query(By.css('.price')).nativeElement.textContent.trim()).toEqual('R 76');
    }));

    it('should add menus to cart', fakeAsync(() => {
      tick();
      fixture.detectChanges();
      let menu: any;
      component.addToCart(menu);
      console.log('service ' + mockMenuService);
      expect(mockMenuService.add).toHaveBeenCalled();
    }));
    it(' should route to should route to shopping cart icon is pressed',
      fakeAsync(() => {
        // tick();
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/shopping-cart']);

      }));

  });

});
