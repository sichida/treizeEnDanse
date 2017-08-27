import {Injectable} from '@angular/core';
import {Media} from "../media-cmp/media.entity";

@Injectable()
export class MediaService {
    _medias: Array<Media> = [
        {title: '', link: 'assets/images/gallery/1-gallery.jpg', thumb: 'assets/images/gallery/thumb/1-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/2-gallery.jpg', thumb: 'assets/images/gallery/thumb/2-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/3-gallery.jpg', thumb: 'assets/images/gallery/thumb/3-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/4-gallery.jpg', thumb: 'assets/images/gallery/thumb/4-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/5-gallery.png', thumb: 'assets/images/gallery/thumb/5-gallery.png'},
        {title: '', link: 'assets/images/gallery/6-gallery.jpg', thumb: 'assets/images/gallery/thumb/6-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/7-gallery.jpg', thumb: 'assets/images/gallery/thumb/7-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/8-gallery.jpg', thumb: 'assets/images/gallery/thumb/8-gallery.jpg'},
        {title: '', link: 'assets/images/gallery/9-gallery.png', thumb: 'assets/images/gallery/thumb/9-gallery.png'},
        {title: '', link: 'assets/images/gallery/10-gallery.png', thumb: 'assets/images/gallery/thumb/10-gallery.png'}
    ];

    constructor() {
    }

    get medias() {
        return this._medias;
    }
}
