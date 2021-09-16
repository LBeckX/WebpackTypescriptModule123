import {Image} from "./ts/image";
import {Gallery} from "./ts/gallery";
import './app.scss';

(function () {
    const images = [
      new Image('./files/img/w3.jpg', '500px'),
      new Image('./files/img/ciri.png', '500px'),
    ];

    const gallery = new Gallery(images);
    gallery.print();
})();
