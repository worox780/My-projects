
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