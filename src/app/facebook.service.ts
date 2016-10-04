import {Injectable} from '@angular/core';

@Injectable()
export class FacebookService {

    constructor() {
    }

    _init(fb_params: any) {
        window.FB.init(fb_params);
    }
}
