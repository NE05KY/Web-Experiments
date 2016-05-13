define('Button', function () {
    function Button(text, id) {
        this.element = document.createElement("button");
        this.element.setAttribute("id", id);
        this.element.innerHTML = text;
    }

    Button.prototype.append = function (dest) {
        dest.appendChild(this.element);
    };

    Button.prototype.addEventListener = function (eventType, cb) {
        this.element.addEventListener(eventType, cb);
    };

    Button.prototype.removeEventListener = function (eventType, cb) {
        this.element.removeEventListener(eventType, cb);
    };

    return Button;
});