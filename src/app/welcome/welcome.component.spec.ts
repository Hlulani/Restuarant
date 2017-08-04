import {WelcomeComponent} from './welcome.component';
import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {By} from '@angular/platform-browser';

describe('welcome component', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let nextButton: HTMLButtonElement;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });
   describe('when the place holder button is pressed', () => {
    beforeEach(() => {
      nextButton = fixture.debugElement.query(By.css('#place-order')).nativeElement;
      nextButton.click();
    });

    it('should route to categiries', fakeAsync(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/categories']);
    }));

});
});
