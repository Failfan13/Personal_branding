// -------- Set language dropdown flag
setTimeout(() => {
    const lang = document.documentElement.lang.toLowerCase().slice(0 , 2);
    document.getElementById('dropdown-img').attributes[1].value = `images/${lang}.png`;
}, 50);
// const lang = document.documentElement.lang.toLowerCase().slice(0 , 2);
// console.log(document.getElementById('dropdown-img').attributes[1].value = `images/${lang}.png`);

// -------- Clickable dropdown items
var langBtns = document.getElementsByClassName('language-item');
for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function(e){
        e.preventDefault();
        localStorage.setItem('personalisedLanguage', e.target.parentElement.classList[2]);
        window.location.reload();
    });
}