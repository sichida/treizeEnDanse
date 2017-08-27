import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../services/facebook.service';

@Component({
  selector: 'app-facebook-cmp',
  templateUrl: './facebook-cmp.component.html',
  styleUrls: ['./facebook-cmp.component.scss']
})
export class FacebookCmpComponent implements OnInit {
  @Input()
  public appId:string;
  @Input()
  public cookie:boolean;
  @Input()
  public status:boolean;
  @Input()
  public xfbml:boolean;

  constructor(private _facebookService:FacebookService) { }

  ngOnInit() {
    var fbAppId = this.appId || '';

    var fb_params = {
      appId: fbAppId,
      cookie: this.cookie || true,
      status: this.status || true,
      xfbml: this.xfbml || true
    };

    // Setup the post-load callback
    this._facebookService._init(fbAppId, fb_params);
  }
}
