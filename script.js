function updateTopSlider(tval) {//topvalue;
    document.getElementById('output-t').value = tval
    document.getElementById("square").style.borderTopLeftRadius = `${tval}px`
}

function updateRightSlider(rval) {
    document.getElementById('output-r').value = rval
    document.getElementById("square").style.borderTopRightRadius = `${rval}px`
}

function updateBottomSlider(bval) {
    document.getElementById('output-b').value = bval 
    document.getElementById("square").style.borderBottomRightRadius = `${bval}px`
}

function updateLeftSlider(lval) {
    document.getElementById('output-l').value = lval
    document.getElementById("square").style.borderBottomLeftRadius = `${lval}px`
}