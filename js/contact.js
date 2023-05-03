window.addEventListener('scroll', function() {
    if ((window.scrollY + window.innerHeight > document.getElementById('Big-title-intro').offsetTop)) {
        document.getElementById('Big-title-intro').classList.add("show")
    }
    else {
        document.getElementById('Big-title-intro').classList.remove("show")
    }
    if ((window.scrollY + window.innerHeight > document.getElementById('Medium-title-part1').offsetTop)) {
        document.getElementById('Medium-title-part1').classList.add("show")
    }
    else {
        document.getElementById('Medium-title-part1').classList.remove("show")
    }
})