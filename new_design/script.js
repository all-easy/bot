const contact_start = document.getElementById('contact_start');
const contact_end = document.getElementById('contact_end');

contact_start.addEventListener('click', function () {
    if (contact_end.style.display === 'none') {
        contact_end.style.display = 'block';
        contact_start.style.display = 'none';
    }
});

contact_end.addEventListener('click', function () {
    if (contact_end.style.display === 'block') {
        contact_end.style.display = 'none';
        contact_start.style.display = 'block';
    }
});