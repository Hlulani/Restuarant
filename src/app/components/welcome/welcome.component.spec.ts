
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { WelcomeComponent } from './welcome.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';


describe('welcome component', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let nextButton: DebugElement;
  const mockRouter = {
    navigate: jasmine.createSpy('/categories')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [WelcomeComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

  });
  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  describe('when the place holder button pressed', () => {
    beforeEach(() => {
      nextButton = fixture.debugElement.query(By.css('#place-order'));
      fixture.detectChanges();
    });
  });

  it('should route to the categories component', fakeAsync(() => {
    component.placeOrder();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/categories']);
  }));
});


