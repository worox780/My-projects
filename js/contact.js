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
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-part2').offsetTop) {
        document.getElementById('Big-title-part2').classList.add("show");
    }
    else {
        document.getElementById('Big-title-part2').classList.remove("show");
    }
    if (window.scrollY + window.innerHeight > document.getElementById('Big-title-part3').offsetTop) {
        document.getElementById('Big-title-part3').classList.add("show");
    }
    else {
        document.getElementById('Big-title-part3').classList.remove("show");
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
  