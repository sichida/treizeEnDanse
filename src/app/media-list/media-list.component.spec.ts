/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MediaListComponent } from './media-list.component';
import {MediaService} from "../services/media.service";

describe('Component: MediaList', () => {
  beforeEach(() => {
    this.mediaService = new MediaService();
  });

  it('should create an instance', () => {
    let component = new MediaListComponent(this.mediaService);
    expect(component).toBeTruthy();
  });
});
