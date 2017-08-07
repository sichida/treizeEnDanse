/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { MediaListComponent } from './media-list.component';
import { MediaService } from '../media.service';

describe('Component: MediaListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediaListComponent],
      providers: [MediaService]
    })
      .compileComponents();
  }));

  it('should create an instance', () => {
    let component = TestBed.createComponent(MediaListComponent).componentInstance;
    expect(component).toBeTruthy();
  });
});
