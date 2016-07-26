function draw(figure) {
    var cx = document.querySelector('canvas').getContext('2d');

    switch (figure) {
        case 'trapeze': drawTrapeze(); break;
        case 'rhombus': drawRhombus(); break;
    }


    function drawTrapeze() {
        cx.moveTo(100, 10);
        cx.lineTo(300, 10);
        cx.lineTo(400, 110);
        cx.lineTo(0, 110);
        cx.closePath();
        cx.stroke();
    }

    function drawRhombus() {

    }

    return {};
}

draw('trapeze');