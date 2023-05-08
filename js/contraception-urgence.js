
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
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 400 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 650) {
            document.getElementById('ph2-intro').classList.add('higlite')
        }else {
            document.getElementById('ph2-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 650 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 900) {
            document.getElementById('ph3-intro').classList.add('higlite')
        }else {
            document.getElementById('ph3-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 900 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 1200) {
            document.getElementById('ph4-intro').classList.add('higlite')
        }else {
            document.getElementById('ph4-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 1200) {
            document.getElementById('ph5-intro').classList.add('higlite')
        }else {
            document.getElementById('ph5-intro').classList.remove('higlite')
        }
});

window.addEventListener('scroll', function() {
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-part2').offsetTop) {
        document.getElementById('Big-title-part2').classList.add("show");
    }
    else {
        document.getElementById('Big-title-part2').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('medium-title1-part2').offsetTop) {
        document.getElementById('medium-title1-part2').classList.add("show");
    }
    else {
        document.getElementById('medium-title1-part2').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('medium-title2-part2').offsetTop) {
        document.getElementById('medium-title2-part2').classList.add("show");
    }
    else {
        document.getElementById('medium-title2-part2').classList.remove("show");
    }

    if (window.scrollY + window.innerHeight > document.getElementById('part21').offsetTop + 500) {
        document.getElementById('ph1-part2').classList.add('higlite')
    }else {
        document.getElementById('ph1-part2').classList.remove('higlite')
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