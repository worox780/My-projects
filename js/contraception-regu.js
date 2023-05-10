
const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");
var posi = 0;

const data = [
    {id: 1, txt: "Les œstrogènes ou estrogènesnote constituent un groupe de stéroïdes, dont la fonction, à l'état naturel, est d'être une hormone sexuelle femelle primaire."},
    {id: 2, txt: "La progestérone est une hormone stéroïdienne principalement sécrétée par les cellules du corps jaune des ovaires et le placenta."},
    {id: 3, txt: "Un progestatif est une hormone stéroïdienne d'action similaire à la progestérone, le seul progestatif naturel."},
    {id: 4, txt: "L'estradiol ou œstradiol est un dérivé naturel du métabolisme du cholestérol qui est nécessaire au maintien de la fertilité et des caractères sexuels secondaires chez les femelles des mammifères dont la femme."},
    {id: 5, txt: "La thrombose est la formation d'un caillot (thrombus) dans une veine ou une artère obstruant la circulation du sang dans le système circulatoire."},
]

let tooltipID;
tooltips.forEach((tooltip) => {
  tooltip.addEventListener("mouseenter", (e) => {

    tooltipID = e.target.getAttribute('data-id');
    tooltipContainer.classList.add("fade-in");
    tooltipContainer.style.left = `${e.pageX - 212.5}px`;
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
    if (this.window.screen.width > 790) {
        this.document.getElementById("menu-phone-all").classList.add("hide");
        this.document.getElementById("menu-pc").classList.remove("hide");
    }else {
        this.document.getElementById("menu-phone-all").classList.remove("hide");
        this.document.getElementById("menu-pc").classList.add("hide");
    }
})

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-intro').offsetTop && window.scrollY >= 1) {
        document.getElementById('Big-title-intro').classList.add("show");
    }
    else {
        document.getElementById('Big-title-intro').classList.remove("show");
    }
    
        
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
    
});

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-part2').offsetTop) {
        document.getElementById('Big-title-part2').classList.add("show");
    }
    else {
        document.getElementById('Big-title-part2').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('titre-intro2-2').offsetTop) {
        document.getElementById('titre-intro2-2').classList.add("show");
    }
    else {
        document.getElementById('titre-intro2-2').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('titre-intro2-1').offsetTop) {
        document.getElementById('titre-intro2-1').classList.add("show");
    }
    else {
        document.getElementById('titre-intro2-1').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('part21').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('part21').offsetTop + 600) {
        document.getElementById('ph1-part2').classList.add('higlite')
    }else {
        document.getElementById('ph1-part2').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('part21').offsetTop + 600 && window.scrollY + window.innerHeight < document.getElementById('part21').offsetTop + 750) {
        document.getElementById('ph2-part2').classList.add('higlite')
    }else {
        document.getElementById('ph2-part2').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('part21').offsetTop + 750) {
        document.getElementById('ph3-part2').classList.add('higlite')
    }else {
        document.getElementById('ph3-part2').classList.remove('higlite')
    }

    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe1-part2-1').offsetTop) {
        document.getElementById('paragraphe1-part2-1').classList.add("show");
    }
    else {
        document.getElementById('paragraphe1-part2-1').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe2-part2-1').offsetTop) {
        document.getElementById('paragraphe2-part2-1').classList.add("show");
    }
    else {
        document.getElementById('paragraphe2-part2-1').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe1-part2-2').offsetTop) {
        document.getElementById('paragraphe1-part2-2').classList.add("show");
    }
    else {
        document.getElementById('paragraphe1-part2-2').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe2-part2-2').offsetTop) {
        document.getElementById('paragraphe2-part2-2').classList.add("show");
    }
    else {
        document.getElementById('paragraphe2-part2-2').classList.remove("show");
    }
})


const counter1 = document.getElementById('pourcentage1-donnée1');
let can_pourcentage_1 = true;
const counter2 = document.getElementById('pourcentage1-donnée21');
const counter3 = document.getElementById('pourcentage1-donnée22');
const counter4 = document.getElementById('pourcentage2-donnée1');
let can_pourcentage_2 = true;
const counter5 = document.getElementById('pourcentage2-donnée21');

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('titre-intro2-3').offsetTop) {
        document.getElementById('titre-intro2-3').classList.add("show");
    }
    else {
        document.getElementById('titre-intro2-3').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('texte-intro-part3').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('texte-intro-part3').offsetTop + 400) {
        document.getElementById('ph1-part3').classList.add('higlite')
    }else {
        document.getElementById('ph1-part3').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('texte-intro-part3').offsetTop + 400) {
        document.getElementById('ph2-part3').classList.add('higlite')
    }else {
        document.getElementById('ph2-part3').classList.remove('higlite')
    }


    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe1-part3').offsetTop) {
        document.getElementById('paragraphe1-part3').classList.add("show");
        document.getElementById('cycle-21').classList.add("show");
    }
    else {
        document.getElementById('paragraphe1-part3').classList.remove("show");
        document.getElementById('cycle-21').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe2-part3').offsetTop) {
        document.getElementById('paragraphe2-part3').classList.add("show");
        document.getElementById('cycle-28').classList.add("show");
    }
    else {
        document.getElementById('paragraphe2-part3').classList.remove("show");
        document.getElementById('cycle-28').classList.remove("show");
    }


    if (window.scrollY + window.innerHeight > document.getElementById('chiffres-clés').offsetTop + 300 && can_pourcentage_1) {
        can_pourcentage_1 = false;
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        const duration = 1000; // en millisecondes
        const interval = 10; // en millisecondes

        function increment1() {
        count1 += 99.6 / (duration / interval);
        if (count1 > 99.5) {
            count1 = 99.5;
        }
        counter1.innerHTML = count1.toFixed(1);
        if (count1 < 99.5) {
            setTimeout(increment1, interval);
        }
        }
        setTimeout(increment1, interval);

        function increment2() {
            count2 += 95 / (duration / interval);
            if (count2 > 95) {
                count2 = 95;
            }
            counter2.innerHTML = count2.toFixed(1);
            if (count2 < 95) {
                setTimeout(increment2, interval);
            }
            }
        setTimeout(increment2, interval);

        function increment3() {
            count3 += 85 / (duration / interval);
            if (count3 > 85) {
                count3 = 85;
            }
            counter3.innerHTML = count3.toFixed(1);
            if (count3 < 85) {
                setTimeout(increment3, interval);
            }
        }
        setTimeout(increment3, interval);
    }

    if (window.scrollY + window.innerHeight > document.getElementById('chiffres-clés2').offsetTop + 300 && can_pourcentage_2) {
        can_pourcentage_2 = false;
        let count1 = 0;
        let count2 = 0;
        const duration = 1000; // en millisecondes
        const interval = 10; // en millisecondes

        function increment1() {
        count1 += 97 / (duration / interval);
        if (count1 > 97) {
            count1 = 97;
        }
        counter4.innerHTML = count1.toFixed(1);
        if (count1 < 97) {
            setTimeout(increment1, interval);
        }
        }
        setTimeout(increment1, interval);

        function increment2() {
            count2 += 99 / (duration / interval);
            if (count2 > 99) {
                count2 = 99;
            }
            counter5.innerHTML = count2.toFixed(1);
            if (count2 < 99) {
                setTimeout(increment2, interval);
            }
            }
            setTimeout(increment2, interval);
    }

    if (window.scrollY + window.innerHeight > document.getElementById('texte-outro-part3').offsetTop + 250) {
        document.getElementById('texte-outro-part3').classList.add('higlite')
    }else {
        document.getElementById('texte-outro-part3').classList.remove('higlite')
    }

    if (window.scrollY + window.innerHeight > document.getElementById('titre-intro-part4').offsetTop) {
        document.getElementById('titre-intro-part4').classList.add("show");
    }
    else {
        document.getElementById('titre-intro-part4').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('paragraphe1-part4').offsetTop) {
        document.getElementById('paragraphe1-part4').classList.add("show");
    }
    else {
        document.getElementById('paragraphe1-part4').classList.remove("show");
    }
    
})

