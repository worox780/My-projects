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
  