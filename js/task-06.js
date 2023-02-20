const inputRef = document.querySelector(`#validation-input`);
const inputLength = inputRef.dataset.length;


inputRef.addEventListener('input', e => {
    const text = e.target.value;
  
    if (text.length === +inputLength) {
      inputRef.classList.add('valid');
      inputRef.classList.remove('invalid');
    } else {
      inputRef.classList.remove('valid');
      inputRef.classList.add('invalid');
    }
  });