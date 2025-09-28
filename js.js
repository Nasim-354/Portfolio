const nav = document.getElementById('nav');
const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    nav.classList.toggle('hidden');
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbx9gi5pCKTh5vc55qErj9eX58tAweuBhO317IlOQH9OJl6Gh39ayM4zCWFEPbQRv3s/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = " Message send Success Full";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 500);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})