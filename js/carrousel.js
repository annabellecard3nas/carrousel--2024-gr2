(function () {
    console.log('début carrousel');
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");
    let galerie = document.querySelector('.galerie');
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie_img = galerie.querySelectorAll('img');
    let index = 0;

    for (const elm of galerie_img) {
        creer_image_carrousel(index, elm);
        index += 1;
        creer_radio_carrousel(index - 1);
    }

    function creer_image_carrousel(index, elm) {
        let carrousel__img = document.createElement('img');
        carrousel__img.dataset.index = index;
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
        carrousel__img.addEventListener('click', function() {
            ouvrir_carrousel_sur_image(index);
        });
    }

    function creer_radio_carrousel(index) {
        let carrousel__form = document.querySelector('.carrousel__form');
        let carrousel_radio = document.createElement('input');

        carrousel_radio.classList.add('carrousel_radio')
        carrousel_radio.dataset.index = index;
        carrousel_radio.type = 'radio';
        carrousel_radio.name = "imgRadio";

        carrousel__form.appendChild(carrousel_radio);

        carrousel_radio.addEventListener('click', function () {
            let index = this.dataset.index;
            ouvrir_carrousel_sur_image(index);
        })
    }

    function ouvrir_carrousel_sur_image(index) {
        carrousel.classList.add('carrousel--ouvrir');
        let carrousel__img = carrousel__figure.children;
        for (const img of carrousel__img) {
            img.style.opacity = 0;
        }
        carrousel__img[index].style.opacity = 1;

        // Sélectionner le bouton radio correspondant
        let radios = document.querySelectorAll('.carrousel_radio');
        radios.forEach(radio => {
            radio.checked = false;
        });
        radios[index].checked = true;
    }

    bouton.addEventListener("mousedown", function () {
        let premierRadio = document.querySelector('.carrousel_radio');
        premierRadio.checked = true;
        let indexPremiereImg = premierRadio.dataset.index;
        ouvrir_carrousel_sur_image(indexPremiereImg);
    })

    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })

    // Création d'une div pour les boutons "Précédent" et "Suivant"
    let btnDiv = document.createElement('div');
    btnDiv.classList.add('btnDiv');
    carrousel.appendChild(btnDiv);

    // Ajout des boutons "Précédent" et "Suivant" dans la div
    let btnPrecedent = document.createElement('button');
    btnPrecedent.textContent = "<-";
    btnPrecedent.classList.add('btnPrecedent');
    btnDiv.appendChild(btnPrecedent);

    let btnSuivant = document.createElement('button');
    btnSuivant.textContent = "->";
    btnSuivant.classList.add('btnSuivant');
    btnDiv.appendChild(btnSuivant);

    // Gestion des événements pour les boutons "Précédent" et "Suivant"
    btnPrecedent.addEventListener('click', function () {
        let radios = document.querySelectorAll('.carrousel_radio');
        let checkedIndex = 0;
        radios.forEach((radio, index) => {
            if (radio.checked) {
                checkedIndex = index;
            }
        });
        radios[checkedIndex].checked = false;
        let newIndex = (checkedIndex - 1 + radios.length) % radios.length;
        radios[newIndex].checked = true;
        let carrousel__img = carrousel__figure.children;
        for (const img of carrousel__img) {
            img.style.opacity = 0;
        }
        carrousel__img[newIndex].style.opacity = 1;
    });

    btnSuivant.addEventListener('click', function () {
        let radios = document.querySelectorAll('.carrousel_radio');
        let checkedIndex = 0;
        radios.forEach((radio, index) => {
            if (radio.checked) {
                checkedIndex = index;
            }
        });
        radios[checkedIndex].checked = false;
        let newIndex = (checkedIndex + 1) % radios.length;
        radios[newIndex].checked = true;
        let carrousel__img = carrousel__figure.children;
        for (const img of carrousel__img) {
            img.style.opacity = 0;
        }
        carrousel__img[newIndex].style.opacity = 1;
    });

    // Lier le clic sur les images de la galerie pour ouvrir le carrousel
    galerie_img.forEach((img, index) => {
        img.addEventListener('click', function() {
            ouvrir_carrousel_sur_image(index);
        });
    });

})();
