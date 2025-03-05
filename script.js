
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        handleSubmit();
    }
}

function handleSubmit() {
    const input = document.querySelector('input').value.toUpperCase();
    const result = document.getElementById('result');
    if (input === 'VII') {
        result.textContent = 'Copy the following code and send us through DM on our IG: 7734';
    } else {
        result.textContent = 'INCORRECT CODE';
    }
}
