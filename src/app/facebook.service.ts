import {Injectable} from '@angular/core';

@Injectable()
export class FacebookService {
  private initalized: boolean = false;

  constructor() { }

  _init(fbAppId:string, fb_params: any) {
    if (!this.initalized) {
      (<any>window).fbAsyncInit = () => {
        (<any>window).FB.init(fb_params);
        this.initalized = true;
      };

      (function (d, s, id, fbAppId) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk', fbAppId));
    } else {
      (<any>window).FB.init(fb_params);
    }
  }
}
