import {Image} from "./image";

export class Gallery {

    images: Array<Image> = [];

    constructor(images: Array<Image>) {
        this.images = images;
    }

    print(): boolean {
        this.images.forEach(image => {
           document.body.appendChild(image.get());
        });
        return true;
    }
}
