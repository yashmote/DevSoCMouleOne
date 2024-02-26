document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        resultCal();
    } else if (event.key === 'Backspace') {
        form['input-text-field'].value = form['input-text-field'].value.slice(0, -1);
    } else if (event.key.match(/[0-9+\-*/.=]/)) {
        form['input-text-field'].value += event.key;
    } else if (event.key === 'Escape') {
        // Clear both input field and result display
        acAllClear();
    }
});

function resultCal() {
    let resultShow = document.querySelector('.input-result-show');
    resultShow.innerHTML = eval(form['input-text-field'].value);
    return false;
}

function acAllClear() {
    document.querySelector('.input-result-show').innerHTML = '';
    form['input-text-field'].value = '';
}
