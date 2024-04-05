// -------- Set language dropdown flag
setTimeout(() => {
    let lang = document.documentElement.lang.toLowerCase().slice(0, 2);
    // if (lang != "en") {
    //     lang = "nl";
    // }
    document.getElementById('dropdown-img').attributes[1].value = `../assets/images/${lang}.png`;
}, 1000);

// -------- Clickable dropdown items
var langBtns = document.getElementsByClassName('language-item');
for (var i = 0; i < langBtns.length; i++) {
    langBtns[i].addEventListener('click', function (e) {
        e.preventDefault();
        newLang = e.target.parentElement.classList[2];
        var timeout = 0;
        while (newLang == undefined && timeout <= 5) {
            setTimeout(() => {
                newLang = e.target.parentElement.classList[2];
            }, 1000);

            if (timeout == 5) {
                newLang = "EN";
                break;
            }
            timeout++;
        }
        localStorage.setItem('personalisedLanguage', newLang);
        window.location.reload();
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        document.getElementById('navbar').classList.add('is-solid');
        document.getElementById('fixed-image').classList.add('is-active');
    }
    else {
        document.getElementById('navbar').classList.remove('is-solid');
        document.getElementById('fixed-image').classList.remove('is-active');
    }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var activateMessage = () => {
    document.getElementById('message').classList.add('is-active');
    setTimeout(() => {
        document.getElementById('message').classList.remove('is-active');
    }, 3000);
}

document.querySelectorAll('.submit').forEach(btn => {
    btn.addEventListener('click', () => {
        activateMessage();
    });
});