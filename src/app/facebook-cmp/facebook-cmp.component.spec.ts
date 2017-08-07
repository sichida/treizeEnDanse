/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FacebookCmpComponent } from './facebook-cmp.component';
import { FacebookService } from '../facebook.service';

describe('Component: FacebookCmp', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookCmpComponent],
      providers: [FacebookService]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    let component = TestBed.createComponent(FacebookCmpComponent).componentInstance;
    expect(component).toBeTruthy();
  });
});
