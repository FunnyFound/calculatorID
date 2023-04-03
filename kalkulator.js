const jarijari = document.getElementById('jarijari');
const luas = document.getElementById('luas');
const hasil = document.getElementById('hasil');
const jarijari2 = document.getElementById('jarijarii');
const luas2 = document.getElementById('luass');
const hasil2 = document.getElementById('hasill');


luas.addEventListener('click', function () {
    const proses = parseInt(jarijari.value) * parseInt(jarijari.value) * 22/7
    hasil.innerHTML = proses;
})

luas2.addEventListener('click', function () {
    const proses = parseInt(jarijarii.value) * parseInt(jarijarii.value) * 3.14
    hasill.innerHTML = proses;
})