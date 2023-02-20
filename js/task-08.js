const formRef = document.querySelector(`.login-form`);

formRef.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // console.dir(event.currentTarget.elements);
    // console.log(`Це сабміт форми`);

    // const formData = new FormData(event.currentTarget);
    // // console.log(formData);

    // formData.forEach((value, name) => {
    //     console.log(`onFormSubmit -> value`, value);
    //     console.log(`onFormSubmit -> name`, name);

    const {
        elements: { email, password },
            } = event.currentTarget
    
    if(email.value === `` || password.value === ``) {
        return alert(`Всі поля повинні бути заповнені`)
        }

    const dataUserAll = { email: email.value, password: password.value }
    console.log(dataUserAll);
    event.currentTarget.reset()
};


