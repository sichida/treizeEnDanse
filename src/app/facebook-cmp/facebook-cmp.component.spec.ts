/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {FacebookCmpComponent} from './facebook-cmp.component';
import {FacebookService} from "../services/facebook.service";

describe('Component: FacebookCmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: FacebookService, useValue: FacebookService}]
    });
  });

  it('should create an instance', inject([FacebookService], (facebookService: FacebookService) => {
    let component = new FacebookCmpComponent(facebookService);
    expect(component).toBeTruthy();
  }));
});
