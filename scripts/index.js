
const baliseImage = document.querySelector('.carrousel-images img');
const legende = document.querySelector('.carrousel-images figcaption');
const boutons = document.querySelectorAll('.carrousel-images button');
const sectionCarrousel = document.querySelector('section.carrousel-images');

let interval = ''

let indexDuBoutonDeLImageCourante = 3;
let indexDuBoutonDeLaDerniereImage = 7;

const image1 = {
    source: './assets/img/dolomites-1920.jpg',
    textAlternatif: 'Image d\'un parc de dolomites',
    indexBouton: 3,
    legenge:'Légende de l\'image 1',
};

const image2 = {
    source: './assets/img/foret1920.jpg',
    textAlternatif: 'Image de forêt',
    indexBouton: 4,
    legenge:'Légende de l\'image 2'
};

const image3 = {
    source: './assets/img/lake-1920.jpg',
    textAlternatif: 'Image de lac',
    indexBouton: 5,
    legenge:'Légende de l\'image 3'
};

const image4 = {
    source: './assets/img/montagnes1920.jpg',
    textAlternatif: 'Image de montagnes',
    indexBouton: 6,
    legenge:'Légende de l\'image 4'
};

const image5 = {
    source: './assets/img/rocky-coast-1920.jpg',
    textAlternatif: 'Image de côte rocheus',
    indexBouton: 7,
    legenge:'Légende de l\'image 5'
};

const imagesDuCarrousel = [
    image1,
    image2,
    image3,
    image4,
    image5
];

function obternirInterval() {
    interval = setInterval(function() {
        mettreEnPageLaFigureSuivante();
    }, 5000);
}

function mettreEnPageLaFigure(i) {
    baliseImage.src = imagesDuCarrousel[i].source;
    baliseImage.alt = imagesDuCarrousel[i].textAlternatif;
    legende.innerHTML = imagesDuCarrousel[i].legenge;
    boutons.forEach(element => {
        element.classList.remove('bouton-actif');
    });
    boutons[imagesDuCarrousel[i].indexBouton].classList.add('bouton-actif');
    indexDuBoutonDeLImageCourante = imagesDuCarrousel[i].indexBouton;
}

function mettreEnPageLaFigureSuivante() {
    mettreEnPageLaFigure(indexDuBoutonDeLImageCourante == 7 ? 0 : indexDuBoutonDeLImageCourante-2);
}

function afficherImageChoisie(event) {

    if (event.target == boutons[3]) {
        mettreEnPageLaFigure(0);
    } else if (event.target == boutons[4]) {
        mettreEnPageLaFigure(1);
    } else if (event.target == boutons[5]){
        mettreEnPageLaFigure(2);
    } else if (event.target == boutons[6]){
        mettreEnPageLaFigure(3);
    } else if (event.target == boutons[7]){
        mettreEnPageLaFigure(4);
    } else if (event.target == boutons[0]){
        mettreEnPageLaFigure(indexDuBoutonDeLImageCourante == 3 ? 4 : indexDuBoutonDeLImageCourante-4);
    } else if (event.target == boutons[1]){
        mettreEnPageLaFigureSuivante();
    } else if (event.target == boutons[2] && boutons[2].title == 'Jouer'){
        event.target.innerHTML = '|&nbsp;|';
        event.target.classList.remove('jouer');
        event.target.classList.add('arreter');
        obternirInterval();
        boutons[2].title = 'Arrêter';   
    } else {
        event.target.innerHTML = '►';
        event.target.classList.remove('arreter');
        event.target.classList.add('jouer');
        clearInterval(interval);
        boutons[2].title = 'Jouer';
    }

}

function definirHauteurImage() {

    let largeurCarrousel = sectionCarrousel.clientWidth;

    if (window.innerWidth > 1777){
        sectionCarrousel.style.height = '900px';
        sectionCarrousel.style.width = '1600px';
    } else {
        largeurCarrousel = 0.9 * window.innerWidth;
        sectionCarrousel.style.height = largeurCarrousel / 16 * 9 + 'px';
        sectionCarrousel.style.width = largeurCarrousel + 'px';
    }

}

obternirInterval();

definirHauteurImage();

window.addEventListener('resize', definirHauteurImage);

boutons.forEach(element => {
    element.addEventListener('click', afficherImageChoisie);
});
