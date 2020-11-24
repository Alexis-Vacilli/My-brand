const forms = document.querySelector('.in');

forms.addEventListener('submit', (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(form.email.value, form.password.value).then(() => {
        location.href = `../admin/create.html`;
    })
})

