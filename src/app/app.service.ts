import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    imagesUrl: any[];

    setImagesUrl(imagesUrl){
        this.imagesUrl = imagesUrl;
    }
    getImagesUrl(): any[]{
        return this.imagesUrl;
    }
}