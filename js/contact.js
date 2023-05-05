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
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 350) {
            document.getElementById('ph1-intro').classList.add('higlite')
        }else {
            document.getElementById('ph1-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 350 && window.scrollY + window.innerHeight < document.getElementById('txt-intro-def').offsetTop + 500) {
            document.getElementById('ph2-intro').classList.add('higlite')
        }else {
            document.getElementById('ph2-intro').classList.remove('higlite')
        }
        if (window.scrollY + window.innerHeight > document.getElementById('txt-intro-def').offsetTop + 500) {
            document.getElementById('ph3-intro').classList.add('higlite')
        }else {
            document.getElementById('ph3-intro').classList.remove('higlite')
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

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 350) {
        document.getElementById('ph1-1957').classList.add('higlite')
    }else {
        document.getElementById('ph1-1957').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 350 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 500) {
        document.getElementById('ph2-1957').classList.add('higlite')
    }else {
        document.getElementById('ph2-1957').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 500 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 650) {
        document.getElementById('ph3-1957').classList.add('higlite')
    }else {
        document.getElementById('ph3-1957').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 650) {
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

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1960').offsetTop + 350) {
        document.getElementById('ph1-1960').classList.add('higlite')
    }else {
        document.getElementById('ph1-1960').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop + 350 && window.scrollY + window.innerHeight < document.getElementById('txt-1960').offsetTop + 500) {
        document.getElementById('ph2-1960').classList.add('higlite')
    }else {
        document.getElementById('ph2-1960').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop + 500) {
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

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1967').offsetTop + 350) {
        document.getElementById('ph1-1967').classList.add('higlite')
    }else {
        document.getElementById('ph1-1967').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop + 350 && window.scrollY + window.innerHeight < document.getElementById('txt-1967').offsetTop + 500) {
        document.getElementById('ph2-1967').classList.add('higlite')
    }else {
        document.getElementById('ph2-1967').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop + 500) {
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

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1974').offsetTop + 350) {
        document.getElementById('ph1-1974').classList.add('higlite')
    }else {
        document.getElementById('ph1-1974').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop + 350 && window.scrollY + window.innerHeight < document.getElementById('txt-1974').offsetTop + 500) {
        document.getElementById('ph2-1974').classList.add('higlite')
    }else {
        document.getElementById('ph2-1974').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop + 500) {
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

    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 350) {
        document.getElementById('ph1-1999').classList.add('higlite')
    }else {
        document.getElementById('ph1-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 350 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 500) {
        document.getElementById('ph2-1999').classList.add('higlite')
    }else {
        document.getElementById('ph2-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 500 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 650) {
        document.getElementById('ph3-1999').classList.add('higlite')
    }else {
        document.getElementById('ph3-1999').classList.remove('higlite')
    }q
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 650 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 800) {
        document.getElementById('ph4-1999').classList.add('higlite')
    }else {
        document.getElementById('ph4-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 800 && window.scrollY + window.innerHeight < document.getElementById('txt-1999').offsetTop + 950) {
        document.getElementById('ph5-1999').classList.add('higlite')
    }else {
        document.getElementById('ph5-1999').classList.remove('higlite')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop + 950) {
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
  