
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { CategoriesComponent } from 'app/components/Categories/categories.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

describe('Categories Component', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let nextButton: DebugElement;
  const mockRouter = {
    navigate: jasmine.createSpy('navigateTo')
  };
  const mockFirebaseDatabase = {
    list: jasmine.createSpy('list')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MockBackend,
        { provide: Router, useValue: mockRouter },
        { provide: AngularFireDatabase, useValue: mockFirebaseDatabase }
      ],
      declarations: [CategoriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nextButton = fixture.debugElement.query(By.css('#category-item'));
  });

  it('should create component failed', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to menu component', () => {
    component.selectCategories();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/menu']);
  });
});



