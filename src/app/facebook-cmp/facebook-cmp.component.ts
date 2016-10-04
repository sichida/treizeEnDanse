import { Component, OnInit, Input } from '@angular/core';
import { FacebookService } from '../facebook.service';

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
    window.fbAsyncInit = function() {
      this._facebookService._init(fb_params);

      // if('fbInit' in iAttrs) {
      //   iAttrs.fbInit();
      // }
    }.bind(this);

    (function(d, s, id, fbAppId) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id; js.async = true;
      js.src = "//connect.facebook.net/en_US/all.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk', fbAppId));
  }
}
