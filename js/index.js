const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");
var posi = 0;

const data = [
    {id: 1, txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus assumenda quis illo minus numquam voluptates nihil, doloremque unde non."},
    {id: 2, txt: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, deleniti."},
    {id: 3, txt: "Lorem ipsum dolor sit amet."}
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
  
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop) {
      // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
      document.getElementById('txt-1957').classList.add('visibleR');
      document.getElementById('empti1').classList.add('empti')
      if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 200 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 290) {
          this.document.getElementById("ph1").classList.add("grow")
      }
        else {
          this.document.getElementById("ph1").classList.remove("grow")
        }
      if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 290 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 380) {
          this.document.getElementById("ph2").classList.add("grow")
      }
        else {
          this.document.getElementById("ph2").classList.remove("grow")
        }
      if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 380 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 470) {
          this.document.getElementById("ph3").classList.add("grow")
      }
        else {
          this.document.getElementById("ph3").classList.remove("grow")
        }
      if (window.scrollY + window.innerHeight > document.getElementById('txt-1957').offsetTop + 470 && window.scrollY + window.innerHeight < document.getElementById('txt-1957').offsetTop + 580) {
          this.document.getElementById("ph4").classList.add("grow")
      }
        else {
          this.document.getElementById("ph4").classList.remove("grow")
        }
    } else {
      // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
      document.getElementById('empti1').classList.remove('empti')
      document.getElementById('txt-1957').classList.remove('visibleR');
    }
  
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1960').offsetTop) {
      // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
      this.document.getElementById('empti2').classList.add('empti')
      document.getElementById('txt-1960').classList.add('visibleG');
      this.document.getElementById('empti3').classList.add('empti') 
      
    } else {
      // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
      this.document.getElementById('empti2').classList.remove('empti')
      document.getElementById('txt-1960').classList.remove('visibleG');
      this.document.getElementById('empti3').classList.remove('empti')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1967').offsetTop) {
      // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
      this.document.getElementById('empti4').classList.add('empti')
      document.getElementById('txt-1967').classList.add('visibleR');
      this.document.getElementById('empti5').classList.add('empti')
    } else {
      // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
      this.document.getElementById('empti4').classList.remove('empti')
      document.getElementById('txt-1967').classList.remove('visibleR');
      this.document.getElementById('empti5').classList.remove('empti')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1974').offsetTop) {
      // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
      this.document.getElementById('empti6').classList.add('empti')
      document.getElementById('txt-1974').classList.add('visibleG');
      this.document.getElementById('empti7').classList.add('empti')
    } else {
      // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
      this.document.getElementById('empti6').classList.remove('empti')
      document.getElementById('txt-1974').classList.remove('visibleG');
      this.document.getElementById('empti7').classList.remove('empti')
    }
    if (window.scrollY + window.innerHeight > document.getElementById('txt-1999').offsetTop) {
      // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
      this.document.getElementById('empti8').classList.add('empti')
      document.getElementById('txt-1999').classList.add('visibleR');
    } else {
      // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
      this.document.getElementById('empti8').classList.remove('empti')
      document.getElementById('txt-1999').classList.remove('visibleR');
    }
  });


var drop2 = document.getElementById("dropleft1");
var drop3 = document.getElementById("dropleft2");
if (window.screen.width <= 900) {
  document.getElementById("img-plus1").style.display = "none";
  document.getElementById("img-plus2").style.display = "none";
  document.getElementById("img-plus3").style.display = "none";
  document.getElementById("img-plus4").style.display = "none";
  document.getElementById("img-plus5").style.display = "none";
  document.getElementById("img-plus6").style.display = "none";
  document.getElementById("dropdown1").style.display = "none";
  document.getElementById("dropleft1").style.display = "none";
  document.getElementById("dropleft2").style.display = "none";
  document.getElementById("dropdown2").style.display = "none";
  document.getElementById("dropdown3").style.display = "none";
}

