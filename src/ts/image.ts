export class Image {
    image: HTMLImageElement = document.createElement('img');

    constructor(src: string, width = 'auto', height = 'auto' ) {
        this.image.src = src;
        this.image.style.width = width;
        this.image.style.height = height;
    }

    get(): HTMLImageElement {
        return this.image;
    }
}
