import {Component, Input} from "@angular/core";
import {Media} from "./media.entity";

@Component({
    selector: 'app-media-cmp',
    templateUrl: './media-cmp.component.html',
    styleUrls: ['./media-cmp.component.scss']
})
export class MediaCmpComponent {
    _src: string;
    fadeIn: boolean = false;
    fadeOut: boolean = false;

    @Input()
    title: string;

    @Input()
    set src(src: string) {
        this.fadeOut = true;
        this.fadeIn = false;
        this._src = src;
        setTimeout(() => {
            this.fadeOut = false;
            this.fadeIn = true;
        }, 200);
    }
}
