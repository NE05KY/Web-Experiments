(function () {
    'use strict';

    define('Image', function () {
        function Image(width, height) {
            var maxWidth = 500, maxHeight = 500;
            width = width || Math.ceil(Math.random() * maxWidth);
            height = height || Math.ceil(Math.random() * maxHeight);

            this.element = document.createElement("img");
            this.element.setAttribute("src", 'http://placekitten.com/' + width + '/' + height);
        }

        Image.prototype.append = function (dest) {
            dest.appendChild(this.element);
        };

        return Image;
    });
})();