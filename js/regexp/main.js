(function () {
    'use strict';

    var regexp = document.getElementById('regexp'),
        text = document.getElementById('text'),
        originalText = text.innerHTML;

    function matchWords() {
        var exp;
        try {
            exp = new RegExp(regexp.value, 'g');
            text.innerHTML = originalText.replace(exp, '<span>$&</span>');
        } catch (err) {
            console.warn(err);
        }
    }

    regexp.addEventListener("keyup", matchWords, false);
    matchWords();
})();