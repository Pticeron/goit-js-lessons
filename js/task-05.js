const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);

inputRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    // console.log(event.target.value);
    outputRef.textContent = event.currentTarget.value;
    // inputRef != ` ` ? outputRef.textContent = event.currentTarget.value : `Anonymous`; 
    if(event.target.value === ``) {
        outputRef.textContent = 'Anonymous';
    };
};

