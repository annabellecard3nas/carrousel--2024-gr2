(function () {
    console.log('debut carrousel')
    let carrousel = document.querySelector(".carrousel");
    let bouton = document.querySelector(".bouton__ouvrir");
    let carrousel__x = document.querySelector(".carrousel__x");

    let galerie = document.querySelector('.galerie');
    // let galerie_img = galerie.querySelector('img');

    
    let carrousel__figure = document.querySelector(".carrousel__figure");
    let galerie_img = galerie.querySelectorAll('img');//collection de l'image de la galerie

    let index= 0;
    for (const elm of galerie_img){
        creer_image_carrousel(index,elm);
        index+=1;
        creer_radio_carrousel(index-1);
    }
    function creer_image_carrousel(index,elm){
        
        let carrousel__img = document.createElement('img');//premiere image seulement 
        carrousel__img.dataset.index=index;
        carrousel__img.classList.add('carrousel__img');
        carrousel__img.src = elm.src;
        carrousel__figure.appendChild(carrousel__img);
        // console.log(carrousel_img.src);

    }

    function creer_radio_carrousel(index){
        let carrousel__form =document.querySelector('.carrousel__form');
        let carrousel_radio = document.createElement('input');

        carrousel_radio.classList.add('carrousel_radio')

        carrousel_radio.dataset.index = index;

        carrousel_radio.type='radio';

        carrousel_radio.name="imgRadio";

        carrousel__form.appendChild(carrousel_radio);
        //creer input
        //modifier type = radio
        //name
        //index
        //ajouter le radio bouton au formulaire
        //ecouteur del'evenement change

        carrousel_radio.addEventListener('click',function(){
            let index = this.dataset.index;
            let  carrousel__img = carrousel__figure.children;
            for(const img of carrousel__img){
                img.style.opacity = 0;
            }
            carrousel__img[index].style.opacity=1;
        })

    }

    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add('carrousel--ouvrir');
    })

    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove('carrousel--ouvrir');
    })

})()