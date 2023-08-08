const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
}

refs.nameInput.addEventListener('input', addName);

function addName(eve) {
    if (refs.nameInput.value != null) {
        return (refs.nameOutput.textContent = refs.nameInput.value);
    }
}
