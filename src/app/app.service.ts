import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class AppService {
    navchange: EventEmitter<[string]> = new EventEmitter();
    imagesUrl: any[];

    setImagesUrl(imagesUrl){
        this.imagesUrl = imagesUrl;
        this.navchange.emit(imagesUrl);
    }
    getImagesUrl(): any[]{
        return this.imagesUrl;
    }
}