(function () {
    var regexp = document.getElementById('regexp'),
        text = document.getElementById('text'),
        originalText = text.innerHTML;

    function matchWords() {
        try {
            var exp = new RegExp(regexp.value, 'g');
            text.innerHTML = originalText.replace(exp, '<span>$&</span>');
        } catch (err) {
            console.err(err);
        }
    }

    regexp.addEventListener("keyup", matchWords, false);
    matchWords();
})();