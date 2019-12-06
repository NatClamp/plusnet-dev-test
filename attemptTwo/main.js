const accordions = document.getElementsByClassName("accordion");
const contentPanels = document.getElementsByClassName(
  "accordion-content-container"
);
const content = document.getElementsByClassName("accordion-content");
// console.log(document.querySelectorAll("div.accordion-content"));

const contentWithinDivsInPanels = document.querySelector(
  ".accordion-content-container > div.accordion-content"
);

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("accordion--open");

    let panel = contentPanels[i];
    let text = content[i];
    if (this.classList.contains("accordion--open")) {
      text.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = 0;
      text.style.display = "none";
    }
  });
}
