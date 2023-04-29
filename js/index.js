const tooltips = Array.from(document.querySelectorAll(".tooltip"));
const tooltipContainer = document.querySelector(".tooltip-container");

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
  var scrollPosition = window.scrollY;
  var monElement1 = document.getElementById('txt-1957');
  var empti1 = this.document.getElementById('empti1');
  var empti2 = this.document.getElementById('empti2');
  var monElement2 = document.getElementById('txt-1960');
  var empti3 = this.document.getElementById('empti1');
  var empti4 = this.document.getElementById('empti2');
  var monElement3 = document.getElementById('txt-1967');
  var empti5 = this.document.getElementById('empti1');
  var empti6 = this.document.getElementById('empti2');
  var monElement4 = document.getElementById('txt-1974');
  var empti7 = this.document.getElementById('empti1');
  var empti8 = this.document.getElementById('empti2');
  var monElement5 = document.getElementById('txt-1999');

  if (scrollPosition > 1450) {
    // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
    monElement1.classList.add('visibleR');
    empti1.classList.add('empti')
  } else {
    // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
    empti1.classList.remove('empti')
    monElement1.classList.remove('visibleR');
  }

  if (scrollPosition > 1800) {
    // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
    empti2.classList.add('empti')
    monElement2.classList.add('visibleG');
    empti3.classList.add('empti')
  } else {
    // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
    empti2.classList.remove('empti')
    monElement2.classList.remove('visibleG');
    empti3.classList.remove('empti')
  }
  if (scrollPosition > 2100) {
    // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
    empti4.classList.add('empti')
    monElement3.classList.add('visibleR');
    empti5.classList.add('empti')
  } else {
    // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
    empti4.classList.remove('empti')
    monElement3.classList.remove('visibleR');
    empti5.classList.remove('empti')
  }
  if (scrollPosition > 2300) {
    // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
    empti6.classList.add('empti')
    monElement4.classList.add('visibleG');
    empti7.classList.add('empti')
  } else {
    // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
    empti6.classList.remove('empti')
    monElement4.classList.remove('visibleG');
    empti7.classList.remove('empti')
  }
  if (scrollPosition > 2600) {
    // Ajouter la classe visible lorsque la fenêtre de l'utilisateur est à plus de 500 pixels du haut de la page
    empti8.classList.add('empti')
    monElement5.classList.add('visibleR');
  } else {
    // Supprimer la classe visible lorsque la fenêtre de l'utilisateur est à moins de 500 pixels du haut de la page
    empti8.classList.remove('empti')
    monElement5.classList.remove('visibleR');
  }
});


