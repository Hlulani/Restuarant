import { TestBed, async } from '@angular/core/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { CategoriesComponent } from './categories.component';
import { ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

describe('categories component', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockFirebaseDatabase = {
    list: jasmine.createSpy('list')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [CategoriesComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebaseDatabase }
      ]
    }).compileComponents();
  }));

beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;

  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

});
