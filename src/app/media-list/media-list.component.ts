import {Component, OnInit, OnDestroy} from '@angular/core';
import {Media} from "../media-cmp/media.entity";
import {MediaService} from "../media.service";

@Component({
    selector: 'app-media-list',
    templateUrl: './media-list.component.html',
    styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit, OnDestroy {
    medias: Array<Media>;
    currentImageIndex: number = 0;
    loopId: number;
    playing: boolean = true;

    constructor(private _mediaService: MediaService) {
    }

    ngOnInit() {
        this.medias = this._mediaService.medias;
        this.loopId = window.setInterval(() => {
            if (this.playing) {
                if (this.currentImageIndex < this.medias.length - 1) {
                    this.currentImageIndex++;
                } else {
                    this.currentImageIndex = 0;
                }
            }
        }, 3000);
    }

    ngOnDestroy(): void {
        window.clearInterval(this.loopId);
    }

}
