import {Injectable} from '@angular/core';
import {Media} from "./media-cmp/media.entity";

@Injectable()
export class MediaService {
    _medias: Array<Media> = [
        {title: '', link: 'assets/images/gallery/1-gallery.jpg', thumb: 'assets/images/gallery/thumb/1-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/2-gallery.jpg', thumb: 'assets/images/gallery/thumb/2-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/3-gallery.jpg', thumb: 'assets/images/gallery/thumb/3-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/4-gallery.jpg', thumb: 'assets/images/gallery/thumb/4-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/5-gallery.jpg', thumb: 'assets/images/gallery/thumb/5-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/6-gallery.jpg', thumb: 'assets/images/gallery/thumb/6-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/7-gallery.jpg', thumb: 'assets/images/gallery/thumb/7-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/8-gallery.png', thumb: 'assets/images/gallery/thumb/8-gallery.png'},
        {title: '', link: 'assets/images/gallery/9-gallery.jpg', thumb: 'assets/images/gallery/thumb/9-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/10-gallery.jpg', thumb: 'assets/images/gallery/thumb/10-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/11-gallery.jpg', thumb: 'assets/images/gallery/thumb/11-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/12-gallery.jpg', thumb: 'assets/images/gallery/thumb/12-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/13-gallery.jpg', thumb: 'assets/images/gallery/thumb/13-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/14-gallery.jpg', thumb: 'assets/images/gallery/thumb/14-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/15-gallery.jpg', thumb: 'assets/images/gallery/thumb/15-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/16-gallery.jpg', thumb: 'assets/images/gallery/thumb/16-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/17-gallery.jpg', thumb: 'assets/images/gallery/thumb/17-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/18-gallery.jpg', thumb: 'assets/images/gallery/thumb/18-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/19-gallery.jpg', thumb: 'assets/images/gallery/thumb/19-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/20-gallery.jpg', thumb: 'assets/images/gallery/thumb/20-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/21-gallery.jpg', thumb: 'assets/images/gallery/thumb/21-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/22-gallery.jpg', thumb: 'assets/images/gallery/thumb/22-gallery.jpg'}
    ];

    constructor() {
    }

    get medias() {
        return this._medias;
    }
}
