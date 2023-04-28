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
