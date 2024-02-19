window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.code === 'KeyU') {
        event.preventDefault();
        alert('Baribir kodni kora olmaysiz !');
    }
});
document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("Kodni ko'chirish taqiqlanadi !!!");
});
window.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyI') {
        event.preventDefault(); 
        alert('Kodni kochirishni hayolingizdan chiqaing!');
    }
});