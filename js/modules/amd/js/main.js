(function () {
    'use strict';

    require(["button"], function (Button) {
        var btn = new Button("Button");
        btn.append(document.getElementsByTagName('body')[0]);

        btn.addEventListener('click', function () {
            require(["image"], function (Image) {
                var img = new Image();
                img.append(document.getElementsByTagName('body')[0]);
            });
        });
    });
})();