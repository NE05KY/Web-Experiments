define('Image', function () {
    function Image(width, height) {
        width = width || Math.ceil(Math.random() * 500);
        height = height || Math.ceil(Math.random() * 500);

        this.element = document.createElement("img");
        this.element.setAttribute("src", 'http://placekitten.com/' + width + '/' + height);
    }

    Image.prototype.append = function (dest) {
        dest.appendChild(this.element);
    };

    return Image;
});