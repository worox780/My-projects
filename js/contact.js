const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");
var posi = 0;

const data = [
    {id: 1, txt: "La stérilisation est une méthode de contraception qui fait emploi d'une procédure chirurgicale et qui offre une contraception permanente, souvent définitive, et fiable."},
    {id: 2, txt: "Le dispositif intra-utérin (DIU), ou stérilet, est un dispositif contraceptif réversible inventé en 1928 par Ernst Gräfenberg."},
    {id: 3, txt: "Les pays les moins avancés (PMA) sont une catégorie de pays créée en 1971 par l'Organisation des Nations unies (ONU), regroupant les pays socio-économiquement les moins développés de la planète."},
    {id: 4, txt: "L'interruption volontaire de grossesse (ou IVG) désigne un avortement déclenché volontairement, que ça soit de la démarche de la femme qui le subit ou imposé."},
    {id: 5, txt: "Gregory Goodwin Pincus (né le 9 avril 1903 à Woodbine et mort le 22 août 1967 à Boston) est un médecin et biologiste américain, co-inventeur de la pilule contraceptive."},
    {id: 6, txt: "Le Mouvement français pour le planning familial, ou planning familial, est une association française régie par la loi de 1901."},
    {id: 7, txt: "La loi Neuwirth est une loi française adoptée par l'Assemblée nationale et le Sénat le 19 décembre 1967 qui autorise l’usage des contraceptifs, et notamment la contraception orale."},
    {id: 8, txt: "La loi du 17 janvier 1975 relative à l'interruption volontaire de grossesse, dite loi Veil, est une loi encadrant une dépénalisation de l'avortement en France."},
    {id: 9, txt: "Simone Veil, née Simone Jacob le 13 juillet 1927 à Nice (Alpes-Maritimes) et morte le 30 juin 2017 à Paris, est une magistrate et une femme d’État française."},
    {id: 10, txt: "Le port"},
    {id: 11, txt: "L’avortement se définit comme l'interruption du processus de gestation,"},
]


let tooltipID;
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseenter", (e) => {

    tooltipID = e.target.getAttribute('data-id');
    tooltipContainer.classList.add("fade-in");
    tooltipContainer.style.left = `${e.pageX}px`;
    tooltipContainer.style.top = `${e.pageY}px`;
    tooltipContainer.innerText = data[tooltipID - 1].txt;

  });

  tooltip.addEventListener("mouseout", (e) => {
    tooltipContainer.classList.remove("fade-in");
  });
});

tooltipContainer.addEventListener('mouseenter', () => {

    tooltipContainer.classList.add("fade-in");

})
tooltipContainer.addEventListener('mouseout', () => {
    
    tooltipContainer.classList.remove("fade-in");

})

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-intro').offsetTop && window.scrollY >= 1) {
        document.getElementById('Big-title-intro').classList.add("show");
    }
    else {
        document.getElementById('Big-title-intro').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('container-intro').offsetTop) {
        
        if (window.scrollY + window.innerHeight > document.getElementById('img-intro-contra').offsetTop && window.scrollY >= 200) {
            document.getElementById('img-intro-contra').classList.add("show")
        }else {
            document.getElementById('img-intro-contra').classList.remove("show")
        }

        if (window.scrollY + window.innerHeight > document.getElementById('container-texte-intro').offsetTop && window.scrollY >= 200) {
            document.getElementById('container-texte-intro').classList.add("show")
        }else {
            document.getElementById('container-texte-intro').classList.remove("show")
        }
        
        if (window.scrollY + window.innerHeight > document.getElementById('Medium-title-part1').offsetTop && window.scrollY >= 200) {
            document.getElementById('Medium-title-part1').classList.add("show")
        }else {
            document.getElementById('Medium-title-part1').classList.remove("show")
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 400) {
            document.getElementById('ph1-intro').classList.add('higlite')
        }else {
            document.getElementById('ph1-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 600) {
            document.getElementById('ph2-intro').classList.add('higlite')
        }else {
            document.getElementById('ph2-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 600) {
            document.getElementById('ph3-intro').classList.add('higlite')
        }else {
            document.getElementById('ph3-intro').classList.remove('higlite')
        }
    }
})

window.addEventListener('scroll', function() {
    // sélectionner tous les éléments div avec la classe "example"
    var growTexte = document.querySelectorAll("span.grow");

    // boucle à travers chaque élément et ajouter la classe "new-class"
    
    if (this.window.scrollY + this.window.innerHeight > this.document.getElementById('part2-1').offsetTop) {
        for (var i = 0; i < growTexte.length; i++) {
            growTexte[i].classList.add("grow-show");
        }
    }else {
        for (var i = 0; i < growTexte.length; i++) {
            growTexte[i].classList.remove("grow-show");
        }
    }
})

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-part2').offsetTop) {
        document.getElementById('Big-title-part2').classList.add("show");
    }
    else {
        document.getElementById('Big-title-part2').classList.remove("show");
    }
})

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-part3').offsetTop) {
        document.getElementById('Big-title-part3').classList.add("show");
    }
    else {
        document.getElementById('Big-title-part3').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > this.document.getElementById('txt-1957').offsetTop) {
        document.getElementById('ph1-1957').classList.add("show");
        document.getElementById('ph2-1957').classList.add("show");
        document.getElementById('ph3-1957').classList.add("show");
        document.getElementById('ph4-1957').classList.add("show");
    }else {
        document.getElementById('ph1-1957').classList.remove("show");
        document.getElementById('ph2-1957').classList.remove("show");
        document.getElementById('ph3-1957').classList.remove("show");
        document.getElementById('ph4-1957').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 400) {
        document.getElementById('ph1-1957').classList.add('higlite')
    }else {
        document.getElementById('ph1-1957').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 600) {
        document.getElementById('ph2-1957').classList.add('higlite')
    }else {
        document.getElementById('ph2-1957').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 600 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 800) {
        document.getElementById('ph3-1957').classList.add('higlite')
    }else {
        document.getElementById('ph3-1957').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 800) {
        document.getElementById('ph4-1957').classList.add('higlite')
    }else {
        document.getElementById('ph4-1957').classList.remove('higlite')
    }

    
    if (window.scrollY + window.innerHeight > this.document.getElementById('txt-1960').offsetTop) {
        document.getElementById('ph1-1960').classList.add("show");
        document.getElementById('ph2-1960').classList.add("show");
        document.getElementById('ph3-1960').classList.add("show");
    }else {
        document.getElementById('ph1-1960').classList.remove("show");
        document.getElementById('ph2-1960').classList.remove("show");
        document.getElementById('ph3-1960').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1960').offsetTop + 400) {
        document.getElementById('ph1-1960').classList.add('higlite')
    }else {
        document.getElementById('ph1-1960').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-1960').offsetTop + 600) {
        document.getElementById('ph2-1960').classList.add('higlite')
    }else {
        document.getElementById('ph2-1960').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop + 600) {
        document.getElementById('ph3-1960').classList.add('higlite')
    }else {
        document.getElementById('ph3-1960').classList.remove('higlite')
    }


    if (window.scrollY + window.innerHeight > this.document.getElementById('txt-1960').offsetTop) {
        document.getElementById('ph1-1967').classList.add("show");
        document.getElementById('ph2-1967').classList.add("show");
        document.getElementById('ph3-1967').classList.add("show");
    }else {
        document.getElementById('ph1-1967').classList.remove("show");
        document.getElementById('ph2-1967').classList.remove("show");
        document.getElementById('ph3-1967').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1967').offsetTop + 400) {
        document.getElementById('ph1-1967').classList.add('higlite')
    }else {
        document.getElementById('ph1-1967').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-1967').offsetTop + 600) {
        document.getElementById('ph2-1967').classList.add('higlite')
    }else {
        document.getElementById('ph2-1967').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop + 600) {
        document.getElementById('ph3-1967').classList.add('higlite')
    }else {
        document.getElementById('ph3-1967').classList.remove('higlite')
    }


    if (window.scrollY + window.innerHeight > this.document.getElementById('txt-1974').offsetTop) {
        document.getElementById('ph1-1974').classList.add("show");
        document.getElementById('ph2-1974').classList.add("show");
        document.getElementById('ph3-1974').classList.add("show");
    }else {
        document.getElementById('ph1-1974').classList.remove("show");
        document.getElementById('ph2-1974').classList.remove("show");
        document.getElementById('ph3-1974').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1974').offsetTop + 400) {
        document.getElementById('ph1-1974').classList.add('higlite')
    }else {
        document.getElementById('ph1-1974').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-1974').offsetTop + 600) {
        document.getElementById('ph2-1974').classList.add('higlite')
    }else {
        document.getElementById('ph2-1974').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop + 600) {
        document.getElementById('ph3-1974').classList.add('higlite')
    }else {
        document.getElementById('ph3-1974').classList.remove('higlite')
    }


    if (window.scrollY + window.innerHeight > this.document.getElementById('txt-1974').offsetTop) {
        document.getElementById('ph1-1999').classList.add("show");
        document.getElementById('ph2-1999').classList.add("show");
        document.getElementById('ph3-1999').classList.add("show");
        document.getElementById('ph4-1999').classList.add("show");
        document.getElementById('ph5-1999').classList.add("show");
        document.getElementById('ph6-1999').classList.add("show");
    }else {
        document.getElementById('ph1-1999').classList.remove("show");
        document.getElementById('ph2-1999').classList.remove("show");
        document.getElementById('ph3-1999').classList.remove("show");
        document.getElementById('ph4-1999').classList.remove("show");
        document.getElementById('ph5-1999').classList.remove("show");
        document.getElementById('ph6-1999').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 400) {
        document.getElementById('ph1-1999').classList.add('higlite')
    }else {
        document.getElementById('ph1-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 600) {
        document.getElementById('ph2-1999').classList.add('higlite')
    }else {
        document.getElementById('ph2-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 600 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 800) {
        document.getElementById('ph3-1999').classList.add('higlite')
    }else {
        document.getElementById('ph3-1999').classList.remove('higlite')
    }q
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 800 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 1000) {
        document.getElementById('ph4-1999').classList.add('higlite')
    }else {
        document.getElementById('ph4-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 1000 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 1200) {
        document.getElementById('ph5-1999').classList.add('higlite')
    }else {
        document.getElementById('ph5-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 1200) {
        document.getElementById('ph6-1999').classList.add('higlite')
    }else {
        document.getElementById('ph6-1999').classList.remove('higlite')
    }
});

window.addEventListener('scroll', function() {
    if (this.window.screen.width > 790) {
        this.document.getElementById("menu-phone-all").classList.add("hide")
        this.document.getElementById("menu-pc").classList.remove("hide")
    }else {
        this.document.getElementById("menu-phone-all").classList.remove("hide")
        this.document.getElementById("menu-pc").classList.add("hide")
    }
})

window.addEventListener('scroll', function() {
    
    if (window.scrollY + window.innerHeight > document.getElementById('frise-container1').offsetTop) {
        document.getElementById('frise-container1').classList.add("moov");
    }
    else {
        document.getElementById('frise-container1').classList.remove("moov");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('frise-container2').offsetTop) {
        document.getElementById('frise-container2').classList.add("moov");
    }
    else {
        document.getElementById('frise-container2').classList.remove("moov");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('frise-container3').offsetTop) {
        document.getElementById('frise-container3').classList.add("moov");
    }
    else {
        document.getElementById('frise-container3').classList.remove("moov");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('frise-container4').offsetTop) {
        document.getElementById('frise-container4').classList.add("moov");
    }
    else {
        document.getElementById('frise-container4').classList.remove("moov");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('frise-container5').offsetTop) {
        document.getElementById('frise-container5').classList.add("moov");
    }
    else {
        document.getElementById('frise-container5').classList.remove("moov");
    }
  });
  